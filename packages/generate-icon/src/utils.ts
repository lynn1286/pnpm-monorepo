import { CodedError } from './types.js'
import chalk from 'chalk'

export function handleError(err: any, exit = true) {
  // unmount()

  if (err instanceof CodedError) {
    const errMsg = `
      ${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(` ${err.code} `)}
      ${err.message}
      ${chalk.dim(!(err.hideStack && err.stack) ? err.stack.replace(/^.*\n/, '') : '')}
    `.trim()

    console.error(errMsg)
  } else {
    console.log(`${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(' UNHANDLED ')}\n`)
    console.error(err)
  }

  if (exit) {
    process.exit(1)
  }
}
