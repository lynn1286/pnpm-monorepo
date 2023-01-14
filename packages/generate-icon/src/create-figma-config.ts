import { IFigmaConfig } from './types.js'
import { Headers } from 'node-fetch'

/**
 * @description: figma 接口参数
 * @param {string} fileKey
 * @return {*}
 */
export function createFigmaConfig(fileKey: string): IFigmaConfig {
  return {
    baseUrl: 'https://api.figma.com',
    fileKey,
    headers: new Headers({
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN // figma access token - 在 figma 个人中心 settings 中设置获取
    })
  }
}
