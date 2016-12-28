'use strict'
/**
 * Clean
 */
import { removeAsync } from './util'

async function clean () {
  await removeAsync('build')
}

export default clean
