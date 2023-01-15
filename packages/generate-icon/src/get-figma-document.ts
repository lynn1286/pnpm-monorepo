import { CodedError, ERRORS, IFigmaConfig, IFigmaDocument, IFigmaFileResponse } from './types.js'
import { fetch } from './utils.js'

export async function getFigmaDocument(config: IFigmaConfig): Promise<IFigmaDocument> {
  const url = `${config.baseUrl}/v1/files/${config.fileKey}` // Figma Api - 获取文件集合

  const resp = await fetch(url, {
    headers: config.headers
  })
  const data = (await resp.json()) as IFigmaFileResponse
  console.log('mademine  : fetch -> Figma Api -> document', data)

  if (data.status === 403 && data.err === 'Invalid token') {
    throw new CodedError(
      ERRORS.FIGMA_API,
      '使用了无效的令牌. 遵循授权指南 (https://git.io/Je87i), 然后再试一次.'
    )
  }
  return data.document
}
