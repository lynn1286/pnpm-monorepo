import type { IFigmaCanvas, IFigmaDocument } from './types.js'

/**
 * @description: 查找 type 类型为 canvas 的 Icons 对象
 * @param {IFigmaDocument} document
 * @return {*}
 */
export function getIconsPage(document: IFigmaDocument): IFigmaCanvas | null {
  const canvas = document.children.find((page) => page.name.toLowerCase() === 'icons')

  return canvas && canvas.type === 'CANVAS' ? canvas : null
}
