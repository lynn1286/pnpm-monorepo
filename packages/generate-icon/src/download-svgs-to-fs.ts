import { transformers } from './transformers.js'
import { IIconManifest, IIcons, IIconsSvgUrls, ITemplateIcon } from './types.js'
import * as path from 'path'
import { temporaryDirectory } from 'tempy'
import { labelling } from './labelling.js'
import { readFileSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { outputFile, remove, copy } from 'fs-extra/esm'
import { fetch, pushObjLeafNodesToArr } from './utils.js'
import prettier from 'prettier'
import * as _ from 'lodash-es'
import * as ejs from 'ejs'
import { FILE_PATH_ENTRY, FILE_PATH_MANIFEST, FILE_PATH_TYPES } from './consts.js'
import { execa } from 'execa'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let currentTempDir = temporaryDirectory()

let currentListOfAddedFiles = []

/**
 * @description: 下载 svgs 到临时目录
 * @param {IIconsSvgUrls} urls
 * @param {IIcons} icons
 * @param {function} onProgress
 * @return {*}
 */
export async function downloadSvgsToFs(
  urls: IIconsSvgUrls,
  icons: IIcons,
  onProgress: () => void,
  className?: string
) {
  await Promise.all(
    Object.keys(urls).map(async iconId => {
      const processedSvg = await (
        await fetch(urls[iconId])
      )
        .text()
        .then(async svgRaw => transformers.passSVGO(svgRaw, className))
        .then(svgRaw => transformers.injectCurrentColor(svgRaw))
        .then(svgRaw => transformers.prettify(svgRaw))

      const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(icons[iconId]))
      await outputFile(filePath, processedSvg, { encoding: 'utf8' })
      currentListOfAddedFiles.push(filePath)
      onProgress()
    })
  )
}

/**
 * @description: 同步写入文件
 * @param {string} filePath
 * @return {*}
 */
export function filePathToSVGinJSXSync(filePath: string) {
  const absFilePath = path.resolve(currentTempDir, filePath)
  const svgRaw = readFileSync(absFilePath, { encoding: 'utf8' })
  return transformers.readyForJSX(svgRaw)
}

/**
 * @description: 生成 React 组件
 * @param {IIcons} icons
 * @return {*}
 */
export async function generateReactComponents(icons: IIcons) {
  const getTemplateSource = templateFile =>
    readFile(path.resolve(__dirname, '../templates/', templateFile), {
      encoding: 'utf8'
    })
  const templates = {
    entry: await getTemplateSource('entry.tsx.ejs'),
    icon: await getTemplateSource('named-icon.tsx.ejs'),
    types: await getTemplateSource('types.tsx')
  }
  const firstIcon = Object.values(icons)[0]
  const iconsWithVariants = Object.values<ITemplateIcon>(
    Object.keys(icons).reduce((iconsWithVariants: { [name: string]: ITemplateIcon }, iconId) => {
      const icon = iconsWithVariants[icons[iconId].svgName] || {
        ids: [],
        sizes: [],
        types: [],
        svgName: icons[iconId].svgName,
        jsxName: icons[iconId].jsxName
      }
      icon.ids = _.uniq(icon.ids.concat(icons[iconId].id))
      icon.sizes = _.uniq(icon.sizes.concat(labelling.stripSizePrefix(icons[iconId].size)))
      icon.types = _.uniq(icon.types.concat(icons[iconId].type))

      iconsWithVariants[icons[iconId].svgName] = icon

      return iconsWithVariants
    }, {})
  )

  const templateHelpers = {
    getDefaultSize() {
      return labelling.stripSizePrefix(firstIcon.size)
    },
    getDefaultType() {
      return firstIcon.type
    },
    iconToComponentName(icon: ITemplateIcon) {
      return `${icon.jsxName}Icon`
    },
    iconToPropsName(icon: ITemplateIcon) {
      return `${icon.jsxName}IconProps`
    },
    iconToReactFileName(icon: ITemplateIcon) {
      return `${icon.jsxName}Icon.tsx`
    },
    iconToSVGSourceAsJSX(icon: ITemplateIcon, size: string, type: string) {
      const filePath = labelling.filePathFromIcon({
        id: icon.ids[0],
        svgName: icon.svgName,
        jsxName: icon.jsxName,
        size,
        type
      })
      return filePathToSVGinJSXSync(filePath)
    },
    iconHasSizeAndType(icon: ITemplateIcon, size: string, type: string) {
      return icon.ids.some(iconId => {
        const prefixedSize = labelling.addSizePrefix(size)
        return icons[iconId].size === prefixedSize && icons[iconId].type === type
      })
    },
    stripExtension(fileName) {
      return fileName.replace(/(.*)\.\w+$/, '$1')
    }
  }

  const prettierOptions = prettier.resolveConfig.sync(process.cwd())
  /* Generate Icon Component Modules */
  for (const i in iconsWithVariants) {
    const icon = iconsWithVariants[i]
    let iconSourceRaw = await ejs.render(templates.icon, {
      icon,
      ...templateHelpers
    })
    const iconSource = prettier.format(iconSourceRaw, {
      ...prettierOptions,
      parser: 'typescript'
    })
    const iconComponentFilePath = path.resolve(
      currentTempDir,
      'src/',
      templateHelpers.iconToReactFileName(icon)
    )
    await outputFile(iconComponentFilePath, iconSource)
    currentListOfAddedFiles.push(iconComponentFilePath)
  }

  /* Generate Entry Module */
  let entrySourceRaw = await ejs.render(templates.entry, {
    icons: iconsWithVariants,
    ...templateHelpers
  })
  const entrySource = prettier.format(entrySourceRaw, {
    ...prettierOptions,
    parser: 'typescript'
  })
  const entryFilePath = path.resolve(currentTempDir, FILE_PATH_ENTRY)
  await outputFile(entryFilePath, entrySource)
  currentListOfAddedFiles.push(entryFilePath)

  /* Generate Type Modules */
  const typeDepsFilePath = path.resolve(currentTempDir, FILE_PATH_TYPES)
  await outputFile(typeDepsFilePath, templates.types)
  currentListOfAddedFiles.push(typeDepsFilePath)
}

/**
 * @description: 生成 manifest json
 * @param {IIcons} icons
 * @return {*}
 */
export async function generateIconManifest(icons: IIcons) {
  const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_MANIFEST)
  const iconManifest = iconsToManifest(icons)
  let iconManifestRaw = JSON.stringify(iconManifest)
  const prettierOptions = prettier.resolveConfig.sync(process.cwd())
  iconManifestRaw = prettier.format(iconManifestRaw, {
    ...prettierOptions,
    parser: 'json'
  })
  const previousIconManifest = await getCurrentIconManifest()
  await writeFile(iconManifestFilePath, iconManifestRaw, {
    encoding: 'utf8'
  })
  currentListOfAddedFiles.push(iconManifestFilePath)
  return [previousIconManifest, iconManifest]
}

/**
 * @description:
 * @param {IIcons} icons
 * @return {*}
 */
export function iconsToManifest(icons: IIcons): IIconManifest {
  return Object.keys(icons).reduce((iconManifest: IIconManifest, iconId) => {
    const icon = icons[iconId]

    if (!iconManifest[icon.type]) {
      iconManifest[icon.type] = {}
    }
    if (!iconManifest[icon.type][icon.size]) {
      iconManifest[icon.type][icon.size] = {}
    }
    if (!iconManifest[icon.type][icon.size][icon.svgName]) {
      iconManifest[icon.type][icon.size][icon.svgName] = labelling.filePathFromIcon(icon)
    }

    return iconManifest
  }, {})
}

/**
 * @description:
 * @return {*}
 */
export async function getCurrentIconManifest(): Promise<IIconManifest> {
  const { stdout: gitRootDir } = await execa('git', ['rev-parse', '--show-toplevel'])
  const gitRelativePathToManifest = path.relative(
    gitRootDir,
    path.resolve(process.cwd(), FILE_PATH_MANIFEST)
  )
  let { stdout: currentManifest } = await execa('git', [
    'show',
    `HEAD:${gitRelativePathToManifest}`
  ])
  return JSON.parse(currentManifest)
}

export async function swapGeneratedFiles(
  previousIconManifest: IIconManifest,
  nextIconManifest: IIconManifest
): Promise<string[]> {
  let generatedFilePaths = []
  pushObjLeafNodesToArr(previousIconManifest, generatedFilePaths)
  pushObjLeafNodesToArr(nextIconManifest, generatedFilePaths)
  generatedFilePaths = generatedFilePaths.concat([FILE_PATH_ENTRY, FILE_PATH_TYPES])
  const topLevelDirs: string[] = _.uniq(
    generatedFilePaths.map(filePath => filePath.replace(/^([\w-]+).*/, '$1'))
  )
  for (const i in topLevelDirs) {
    const topLevelDir = topLevelDirs[i]
    await remove(path.resolve(process.cwd(), topLevelDir))
  }
  await remove(path.resolve(process.cwd(), FILE_PATH_MANIFEST))

  await copy(currentTempDir, process.cwd())

  return [].concat(topLevelDirs, FILE_PATH_MANIFEST)
}
