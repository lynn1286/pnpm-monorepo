import { IFigmaCanvas, IFigmaDocument } from './types.js'

export function getIconsPage(document: IFigmaDocument): IFigmaCanvas | null {
  const canvas = document.children.find(page => page.name.toLowerCase() === 'icons')

  return canvas && canvas.type === 'CANVAS' ? canvas : null
}
