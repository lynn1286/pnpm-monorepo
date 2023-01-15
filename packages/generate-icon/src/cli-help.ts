import * as path from 'path'
import meow from 'meow'

export const cliHelp = async () => {
  const cli = meow(
    `
    Usage
      $ ${path.basename(process.argv[1])} --file=<file-key> --className

    Options
      --file, -f    来自 Figma 的文件密钥
      --className , -c  给 icon 添加 className
      --help        帮助

    Examples
      $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY --className=my-icons
  `,
    {
      importMeta: import.meta,
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f'
        },
        className: {
          type: 'string',
          alias: 'c'
        }
      }
    }
  )

  if (!cli.flags.file) {
    cli.showHelp(1)
  }

  return {
    file: cli.flags.file,
    className: cli.flags.className
  }
}
