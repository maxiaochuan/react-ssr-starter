'use strict'
/**
 * Copy
 */
import { mkdirsAsync, copyAsync } from './util'

async function copy () {
  await mkdirsAsync('build/public')
  await copyAsync('public', 'build/public')
}

export default copy
