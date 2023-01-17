import type { IFigmaConfig, IFigmaFileImageResponse, IIconsSvgUrls } from './types.js'
import { CodedError, ERRORS } from './types.js'
import { fetch } from './utils.js'

/**
 * @description: 请求 svg url
 * @param {string} ids
 * @param {IFigmaConfig} config
 * @return {*}
 */
export async function renderIdsToSvgs(ids: string[], config: IFigmaConfig): Promise<IIconsSvgUrls> {
  const url = `${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`
  const resp = await fetch(url, {
    headers: config.headers,
  })

  let data: IFigmaFileImageResponse = {
    err: null,
    images: {},
  }
  if (resp.headers.get('content-type').includes('application/json')) {
    data = (await resp.json()) as IFigmaFileImageResponse
  }
  const error = typeof data.err === 'object' ? JSON.stringify(data.err, null, 2) : data.err

  if (!resp.ok) {
    switch (resp.status) {
      case 400:
        throw new CodedError(ERRORS.FIGMA_API, `Bad Request 👉 \n${error}`)
      case 404:
        throw new CodedError(ERRORS.FIGMA_API, '没有找到相关资源, 请确认您的icon id 是否正确.')
      case 500:
        throw new CodedError(ERRORS.FIGMA_API, '服务器遇到错误 , 请稍后重试. 🥶')
      default:
        throw new CodedError(ERRORS.UNEXPECTED, `请求遇到错误了 🫠 \n${resp.status}\n${error}`)
    }
  }

  if (!data.images || !Object.keys(data.images).length) {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `Figma 请求成功了, 但是貌似没有找到相关资源 👉 \n${JSON.stringify(data, null, 2)}`
    )
  }

  return data.images
}
