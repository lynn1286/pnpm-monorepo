import {
  CodedError,
  ERRORS,
  IFigmaConfig,
  IFigmaFileImageResponse,
  IIconsSvgUrls
} from './types.js'
import { fetch } from './utils.js'

/**
 * @description: 生成 svg
 * @param {string} ids
 * @param {IFigmaConfig} config
 * @return {*}
 */
export async function renderIdsToSvgs(ids: string[], config: IFigmaConfig): Promise<IIconsSvgUrls> {
  const url = `${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`
  const resp = await fetch(url, {
    headers: config.headers
  })

  let data: IFigmaFileImageResponse = {
    err: null,
    images: {}
  }
  if (resp.headers.get('content-type').includes('application/json')) {
    data = (await resp.json()) as IFigmaFileImageResponse
  }
  const error = typeof data.err === 'object' ? JSON.stringify(data.err, null, 2) : data.err

  if (!resp.ok) {
    switch (resp.status) {
      case 400:
        throw new CodedError(ERRORS.FIGMA_API, `请求 Figma API 遇到错误 👉 \n${error}`)
      case 404:
        throw new CodedError(
          ERRORS.FIGMA_API,
          '在 Figma 中找不到 icons , 检查它们是否存在，然后重试.'
        )
      case 500:
        throw new CodedError(ERRORS.FIGMA_API, 'Figma 无法渲染图标. 🥶')
      default:
        throw new CodedError(
          ERRORS.UNEXPECTED,
          `将 icon 渲染为 SVG 时出错.\n${resp.status}\n${error}`
        )
    }
  }

  if (!data.images || !Object.keys(data.images).length) {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `在 Figma 中渲染 icon 后发生错误 👉 \n${JSON.stringify(data, null, 2)}`
    )
  }

  return data.images
}
