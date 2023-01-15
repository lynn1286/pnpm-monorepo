/**
 * 明明是ts文件， 为何引入却写成 .js ?
 * 解释：
 *   1. 由于本项目打包后是 esm , 所以不带后缀名的文件只能在 cjs 中运行, cjs 需要手动加后缀
 *      相关资料 https://www.typescriptlang.org/docs/handbook/esm-node.html
 */
import { cliHelp } from './cli-help.js'
import { createFigmaConfig } from './create-figma-config.js'
import { downloadSvgsToFs } from './download-svgs-to-fs.js'
import { getFigmaDocument } from './get-figma-document.js'
import { getIconsPage } from './get-icons-page.js'
import { getIcons } from './get-icons.js'
import { prechecks } from './prechecks.js'
import { renderIdsToSvgs } from './render-ids-to-svgs.js'
import { CodedError, ERRORS } from './types.js'
import { handleError } from './utils.js'
import { render } from './view.js'

const main = async () => {
  await prechecks()

  const cliParams = await cliHelp()
  const figmaConfig = createFigmaConfig(cliParams.file)
  render({ fileKey: cliParams.file })

  /* 1. 请求 figma 文档，获取所有的节点 */
  render({
    spinners: [{ text: '正在从 Figma 中查找文档 🤯...' }]
  })

  const document = await getFigmaDocument(figmaConfig)
  render({
    spinners: [
      { success: true, text: '成功获取到 Figma 文档, 即将进入下一步 ✨' },
      { text: '正在查找 Figma 文档中的所有 Icon...' }
    ]
  })

  /* 2. 检索数据, 查找是否存在 Icons 节点  */
  const iconsCanvas = getIconsPage(document)
  if (!iconsCanvas) {
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      `预期 Figma 文件中存在 'Icons' 页面 - 你可能需要在 Figma 中增加 'Icons' 页面`
    )
  }

  /* 3. 获取 Icons 下的图标集 */
  const icons = getIcons(iconsCanvas)
  const iconIds = Object.keys(icons)
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      '预期一个或多个图标设置在 "Icons" 页面中. 你可能需要在 Figma 中进行分组.'
    )
  }

  /* 4. 请求 Figma 服务将 Icon 节点渲染为单独的 SVG */
  render({
    spinners: [{ text: '正在处理所有的 Icon ...' }]
  })
  const iconSvgUrls = await renderIdsToSvgs(iconIds, figmaConfig)

  /* 5. 下载所有的 icon svg 到本地工作区 */
  render({
    spinners: [
      {
        success: true,
        text: 'svg 生成...'
      }
    ],
    progress: {
      text: '准备下载 svg...',
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
          text: '⚡︎ 当前进度...',
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
        text: 'SVG 文件下载成功 👍'
      },
      {
        text: '即将生成 React 组件...'
      }
    ]
  })
}

main()
  .then(() => {
    console.log('图标构建成功 🎉')
  })
  .catch(err => handleError(err))

process.addListener('unhandledRejection', err => handleError(err))
