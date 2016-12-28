import { readFile, ROOT, mkDir } from '../tools/util'
import path from 'path'
// readFile(path.join(ROOT, 'package.jsson')).then(data => console.log(data))

// mkDir(path.join(ROOT, 'a/b/c'))
//
import clean from '../tools/clean'

import copy from '../tools/copy'

async function run () {
  try {
    await clean()
    await copy()
  } catch (err) {
    console.log(err)
  }
}

run()
