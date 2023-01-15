import { loadConfig, Config } from 'svgo'

/**
 * @description: 返回 svgo config
 * @param {string} className
 * @return {*}
 */
export async function getSvgoConfig(className?: string) {
  // 读取 svgo.config.js - 如果有的话 . github: https://github.com/svg/svgo
  const config = (await loadConfig()) as Config

  if (config) {
    return config
  }

  const defaultConfig: Config = {
    plugins: [
      { name: 'removeDoctype' },
      { name: 'removeXMLProcInst' },
      { name: 'removeComments' },
      { name: 'removeMetadata' },
      { name: 'removeEditorsNSData' },
      { name: 'cleanupAttrs' },
      { name: 'minifyStyles' },
      { name: 'convertStyleToAttrs' },
      { name: 'cleanupIds' },
      { name: 'removeUselessDefs' },
      { name: 'cleanupNumericValues' },
      { name: 'convertColors' },
      { name: 'removeUnknownsAndDefaults' },
      { name: 'removeNonInheritableGroupAttrs' },
      { name: 'removeUselessStrokeAndFill' },
      { name: 'cleanupEnableBackground' },
      { name: 'removeHiddenElems' },
      { name: 'removeEmptyText' },
      { name: 'convertShapeToPath' },
      { name: 'moveElemsAttrsToGroup' },
      { name: 'moveGroupAttrsToElems' },
      { name: 'collapseGroups' },
      { name: 'convertTransform' },
      { name: 'removeEmptyAttrs' },
      { name: 'removeEmptyContainers' },
      { name: 'mergePaths' },
      { name: 'removeUnusedNS' },
      { name: 'removeTitle' },
      { name: 'removeDesc' },
      {
        name: 'addClassesToSVGElement',
        params: {
          className: className ?? ' '
        }
      }
    ]
  }

  return defaultConfig
}
