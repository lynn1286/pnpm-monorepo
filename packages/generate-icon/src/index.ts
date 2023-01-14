/**
 * 明明是ts文件， 为何引入却写成 .js ?
 * 解释：
 *   1. 由于本项目打包后是 esm , 所以不带后缀名的文件只能在 cjs 中运行, cjs 需要手动加后缀
 *      相关资料 https://www.typescriptlang.org/docs/handbook/esm-node.html
 */
import { cliHelp } from './cli-help.js'
import { createFigmaConfig } from './create-figma-config.js'
import { prechecks } from './prechecks.js'
import { handleError } from './utils.js'

const main = async () => {
  await prechecks()

  const file = await cliHelp()
  const figmaConfig = createFigmaConfig(file)
  console.log('mademine  : main -> figmaConfig', figmaConfig)

  return ''
}

main()
  .then(() => {
    console.log('成功 👏')
  })
  .catch(err => handleError(err))

process.addListener('unhandledRejection', err => handleError(err))
