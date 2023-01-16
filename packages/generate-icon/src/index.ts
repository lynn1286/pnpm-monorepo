/**
 * 明明是ts文件， 为何引入却写成 .js ?
 * 解释：
 *   1. 由于本项目打包后是 esm , 所以不带后缀名的文件只能在 cjs 中运行, cjs 需要手动加后缀
 *      相关资料 https://www.typescriptlang.org/docs/handbook/esm-node.html
 */
import { cliHelp } from './cli-help.js'
import { createFigmaConfig } from './create-figma-config.js'
import {
  downloadSvgsToFs,
  generateIconManifest,
  generateReactComponents,
  swapGeneratedFiles
} from './download-svgs-to-fs.js'
import { getFigmaDocument } from './get-figma-document.js'
import { getGitCustomDiff } from './get-git-custom-diff.js'
import { getIconsPage } from './get-icons-page.js'
import { getIcons } from './get-icons.js'
import { prechecks } from './prechecks.js'
import { renderIdsToSvgs } from './render-ids-to-svgs.js'
import { CodedError, ERRORS } from './types.js'
import { handleError } from './utils.js'
import { render, unmount } from './view.js'
import * as path from 'path'
import * as dotenv from 'dotenv'

const main = async () => {
  // 设置环境变量
  dotenv.config({
    path: path.resolve(process.cwd(), '.env')
  })

  await prechecks()

  const cliParams = await cliHelp()
  const figmaConfig = createFigmaConfig(cliParams.file)
  render({ fileKey: cliParams.file })

  /* 1. 请求 figma , 获取所有文档 */
  render({
    spinners: [{ text: '正在从 Figma 中获取文档 🤯...' }]
  })
  const document = await getFigmaDocument(figmaConfig)
  render({
    spinners: [
      { success: true, text: '成功获取到 Figma 文档, 即将进入下一步 ✨' },
      { text: '正在查找 Figma 文档中的所有 Icon...' }
    ]
  })

  /* 2. 遍历查找 Icons 对象   */
  const iconsCanvas = getIconsPage(document)
  if (!iconsCanvas) {
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      `预期 Figma 文档中应该存在 'Icons' 对象, 但没有找到 😭 - 你可能需要在 Figma 中创建 'Icons' 画布`
    )
  }

  /* 3. 遍历 Icons 对象下 children - 组装需要的数据 */
  const icons = getIcons(iconsCanvas)
  const iconIds = Object.keys(icons)
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      '未读取到任何 svg 文件, 请确认 Figma 中文件是否存在.'
    )
  }

  /* 4. 根据 icon id 得到 svg url */
  render({
    spinners: [{ text: '根据 icon id 得到 svg url...' }]
  })
  const iconSvgUrls = await renderIdsToSvgs(iconIds, figmaConfig)

  /* 5. 下载 svg */
  render({
    spinners: [
      {
        success: true,
        text: '准备下载 svg 文件...'
      }
    ],
    progress: {
      text: '当前进度...',
      percent: 0
    }
  })
  let downloadsCompleted = 0
  await downloadSvgsToFs(
    iconSvgUrls,
    icons,
    () => {
      downloadsCompleted += 1
      render({
        progress: {
          text: '当前进度...',
          percent: downloadsCompleted / iconIds.length
        }
      })
    },
    cliParams.className
  )
  render({
    spinners: [
      {
        success: true,
        text: '文件下载成功 👏'
      },
      {
        text: '即将创建 React 组件...'
      }
    ]
  })

  /* 6. 生成 React 组件 */
  await generateReactComponents(icons)
  render({
    spinners: [
      {
        success: true,
        text: 'React 组件创建成功 ⚛️ '
      },
      {
        text: '即将创建 Manifest 文件...'
      }
    ]
  })

  /* 6. 创建 Manifest */
  const [previousIconManifest, nextIconManifest] = await generateIconManifest(icons)
  render({
    spinners: [
      {
        success: true,
        text: '创建 Manifest 成功 📓 🔥'
      },
      {
        text: '写入 Manifest 文件...'
      }
    ]
  })

  /* 7. 生成文件. */
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest)
  render({
    spinners: [
      {
        success: true,
        text: '对工作目录应用更改 💇‍'
      }
    ]
  })

  /* 8. 输入 git 差异. */
  try {
    render({
      diff: await getGitCustomDiff(touchedPaths)
    })
  } catch (err) {}

  unmount()
}

main()
  .then(() => {
    console.log('\n 图标构建成功 🎉')
  })
  .catch(err => handleError(err))

process.addListener('unhandledRejection', err => handleError(err))
