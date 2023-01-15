import { IFigmaCanvas, IIcons } from './types.js'
import * as _ from 'lodash-es'
import { labelling } from './labelling.js'

export function getIcons(iconsCanvas: IFigmaCanvas): IIcons {
  return iconsCanvas.children.reduce((icons: IIcons, iconSetNode) => {
    if (iconSetNode.type === 'FRAME' || iconSetNode.type === 'GROUP') {
      iconSetNode.children.forEach(iconNode => {
        if (iconNode.type === 'FRAME' || iconNode.type === 'COMPONENT') {
          // TODO: icon / fill / refunded - 设计那边的命名 , 前端组件与设计那边同步 - 后面需要跟设计沟通

          // 'Break Link' => 'break-link' icon重命名
          const svgName = _.kebabCase(iconNode.name.toLowerCase())

          // 'Break Link' => 'BreakLink'
          const jsxName = _.upperFirst(
            _.camelCase(iconNode.name.replace(/([0-9a-z])([0-9A-Z])/g, '$1 $2'))
          )

          icons[iconNode.id] = {
            jsxName,
            svgName,
            id: iconNode.id,
            size: labelling.sizeFromFrameNodeName(iconSetNode.name),
            type: labelling.typeFromFrameNodeName(iconSetNode.name)
          }
        }
      })
    }
    return icons
  }, {})
}
