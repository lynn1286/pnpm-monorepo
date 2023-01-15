import { IDiffSummary } from './types.js'
import { execa } from 'execa'
import * as path from 'path'

export async function getGitCustomDiff(touchedPaths): Promise<IDiffSummary[]> {
  const { stdout: gitRootDir } = await execa('git', ['rev-parse', '--show-toplevel'])
  /* Stage all changes to tracked files. */
  /* Stage the "intent" to add for all untracked files. */
  await execa('git', ['add', '-f', '--ignore-removal', '--intent-to-add', '--', ...touchedPaths])
  /* Grab the lines changed per file, as well as the kind of change (D, M, A) */
  const [{ stdout: numstatRaw }, { stdout: nameStatRaw }] = await Promise.all([
    execa('git', ['diff', '--numstat', '--no-renames', '--', process.cwd()]),
    execa('git', ['diff', '--name-status', '--no-renames', '--', process.cwd()])
  ])

  /* Transform the raw stdout to renderable data. */
  const nameStat = nameStatRaw.split('\n').map(line => line[0])
  const diffSummaries: IDiffSummary[] = numstatRaw
    .split('\n')
    .map(line => line.split('\t'))
    .map(([additions, deletions, filePath], i) => {
      const filePathFromCwd = filePath
        .replace(path.relative(gitRootDir, process.cwd()), '')
        .replace(/^\//, '')

      return {
        status: nameStat[i] || 'M',
        additions: parseInt(additions, 10),
        deletions: parseInt(deletions, 10),
        filePath: filePathFromCwd,
        fullFilePath: filePath
      }
    })

  /* Undo the staging done above, to ensure an expected git status after this tool has been run. */
  await execa('git', ['reset', 'HEAD', '--', process.cwd()])

  return diffSummaries
}
