import * as path from 'path'
import type { IIcon } from './types.js'
import * as _ from 'lodash-es'

/**
 * @description: 贴标签
 * @return {*}
 */
export const labelling = {
  typeFromFrameNodeName(nodeName: string): string {
    const base = path.dirname(nodeName)
    const trimmed = base.trim()
    const camelCased = _.camelCase(trimmed)
    return camelCased
  },
  sizeFromFrameNodeName(nodeName: string): string {
    return labelling.addSizePrefix(path.basename(nodeName).toLowerCase().trim())
  },
  filePathFromIcon(icon: IIcon): string {
    return path.join(icon.type, labelling.stripSizePrefix(icon.size), `${icon.svgName}.svg`)
  },
  stripSizePrefix(size) {
    return size.replace(/^:?(.*)/, '$1')
  },
  addSizePrefix(size) {
    return `:${size.replace(/^(:?)(.*)/, '$2')}`
  },
}
