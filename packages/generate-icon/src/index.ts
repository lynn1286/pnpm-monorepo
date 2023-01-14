import { prechecks } from './prechecks.js'
import { handleError } from './utils.js'

const main = async () => {
  await prechecks()

  return ''
}

main()
  .then(() => {
    console.log('成功 👏')
  })
  .catch(err => handleError(err))

process.addListener('unhandledRejection', err => handleError(err))
