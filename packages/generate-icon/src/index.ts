import preChecks from './prechecks'
import { handleError } from './utils'

const main = async () => {
  await preChecks()

  return ''
}

main()
  .then(() => {
    console.log('成功 👏')
  })
  .catch(err => handleError(err))

process.addListener('unhandledRejection', err => handleError(err))
