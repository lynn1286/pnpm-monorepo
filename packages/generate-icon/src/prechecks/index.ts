import isOnline from 'is-online'
import { CodedError, ERRORS } from '../types'
import execa from 'execa'
import { handleError } from '../utils'
import chalk from 'chalk'

/**
 * @description: 预检环境
 * @return {*}
 */
async function preChecks() {
  const isOn = await isOnline()
  if (!isOn) {
    throw new CodedError(ERRORS.NETWORK_OFFLINE, '不能离线工作,请连接网络后重试 🫵.', true)
  }

  console.log('mademine  : preChecks -> ', process.cwd())

  const [{ stdout: trackedFiles }, { stdout: untrackedFiles }] = await Promise.all([
    execa('git', ['diff-index', 'HEAD', '--', process.cwd()]),
    execa('git', ['ls-files', '--others', '--exclude-standard', process.cwd()])
  ])

  if (trackedFiles.length > 0 || untrackedFiles.length > 0) {
    handleError(
      new CodedError(
        ERRORS.DIRTY_WORKING_DIR,
        '您当前的工作目录中有未提交或未跟踪的文件。\n 请提交、存储或删除它们之后重试 🫵.',
        true
      ),
      false
    )
    console.error(`
      ${chalk.bold('Git Status')} ${chalk.dim(
      `(${['--no-renames', '--untracked-files', '--short', '--', process.cwd()].join(' ')})`
    )}
    `)
    await execa(
      'git',
      ['status', '--no-renames', '--untracked-files', '--short', '--', process.cwd()],
      {
        stdio: 'inherit'
      }
    )
    process.exit(1)
  }
}

export default preChecks
