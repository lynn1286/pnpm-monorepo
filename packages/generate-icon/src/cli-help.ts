import * as path from 'path'
import meow from 'meow'

export const cliHelp = async () => {
  const cli = meow(
    `
    Usage
      $ ${path.basename(process.argv[1])} --file=<file-key>

    Options
      --file, -f    File Key from Figma
      --help        Show this message

    Examples
      $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY
  `,
    {
      importMeta: import.meta,
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f'
        }
      }
    }
  )

  if (!cli.flags.file) {
    cli.showHelp(1)
  }
}
