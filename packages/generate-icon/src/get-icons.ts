import type { IFigmaCanvas, IIcons } from './types.js'
import * as _ from 'lodash-es'
import { labelling } from './labelling.js'

/**
 * @description: 遍历 Icons 对象下的 , 组装需要的数据
 * @param {IFigmaCanvas} iconsCanvas
 * @return {*}
 */
export function getIcons(iconsCanvas: IFigmaCanvas): IIcons {
  return iconsCanvas.children.reduce((icons: IIcons, iconSetNode) => {
    // 筛选数据 - 允许 icon 存放在 FRAME 或者  GROUP 下
    if (iconSetNode.type === 'FRAME' || iconSetNode.type === 'GROUP') {
      iconSetNode.children.forEach((iconNode) => {
        // 筛选数据 - 找到 COMPONENT
        if (iconNode.type === 'FRAME' || iconNode.type === 'COMPONENT') {
          let iconName = iconNode.name

          // 如果有进行文件夹分类的场景
          if (/\//.test(iconNode.name)) {
            const folder = iconNode.name.split('/')
            iconName = folder[folder.length - 1]
          }

          // 'Break Link' => 'break-link' - 统一中划线命名
          const svgName = _.kebabCase(iconName.toLowerCase())

          // 'Break Link' => 'BreakLink' - 去掉空格
          const jsxName = _.upperFirst(
            _.camelCase(iconName.replace(/([0-9a-z])([0-9A-Z])/g, '$1 $2'))
          )

          icons[iconNode.id] = {
            jsxName,
            svgName,
            id: iconNode.id,
            size: labelling.sizeFromFrameNodeName(iconSetNode.name), // 来自 Figma 的文件命名规范 ： Icons/48 -> :48
            type: labelling.typeFromFrameNodeName(iconSetNode.name), // 来自 Figma 的文件命名规范 ： Icons/48 -> Icons
          }
        }
      })
    }
    return icons
  }, {})
}
