import type { RequestInitWithRetry } from './types.js'
import { CodedError, ERRORS } from './types.js'
import chalk from 'chalk'
import type { Response } from 'node-fetch'
import nodeFetch from 'node-fetch'
import isOnline from 'is-online'
import { unmount } from './view.js'
import * as _ from 'lodash-es'

/**
 * @description: ιθ――ε€η π
 * @param {any} err
 * @param {*} exit
 * @return {*}
 */
export function handleError(err: any, exit = true) {
  unmount()

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

let currentOnlineCheck = null

const defaultRetry = {
  delay: 1000,
  retries: 2,
}

/**
 * @description: θ―·ζ±ε°θ£
 * @param {string} url
 * @param {RequestInitWithRetry} fetchOptions
 * @return {*}
 */
export function fetch(url: string, fetchOptions: RequestInitWithRetry = {}): Promise<Response> {
  // ιθ―εζ°
  const retryOptions = { ...defaultRetry, ...fetchOptions.retry }

  return new Promise((resolve, reject) => {
    const attemptFetch = (remainingRetries: number) => {
      nodeFetch(url, fetchOptions)
        .then((res) => {
          resolve(res)
        })
        .catch(async (err) => {
          if (remainingRetries > 0) {
            await asyncDelay(retryOptions.delay)
            attemptFetch(--remainingRetries)
          } else {
            if (!currentOnlineCheck) {
              currentOnlineCheck = isOnline()
            }
            const isOn = await currentOnlineCheck
            currentOnlineCheck = null
            if (!isOn) {
              reject(new CodedError(ERRORS.NETWORK_OFFLINE, 'θ―·ζ£ζ₯ζ―ε¦θΏζ₯δΊη½η». π€'))
            } else {
              reject(err)
            }
          }
        })
    }

    attemptFetch(retryOptions.retries)
  })
}

/**
 * @description: ε»ΆζΆε?ζΆε¨
 * @param {number} timeout
 * @return {*}
 */
function asyncDelay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, timeout)
  })
}

export function pushObjLeafNodesToArr(obj: {}, arr: string[], accessor: any[] = []) {
  _.forEach(accessor.length ? _.get(obj, accessor) : obj, (v, k) => {
    if (v == null) return
    const currentAccessor = accessor.concat(k)
    if (typeof v === 'object') {
      pushObjLeafNodesToArr(obj, arr, currentAccessor)
    }
    if (typeof v === 'string') {
      arr.push(_.get(obj, currentAccessor))
    }
  })
}
