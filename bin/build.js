'use strict'
import run from '../tools/run'
import clean from '../tools/clean'
import copy from '../tools/copy'
import bundle from '../tools/bundle'

async function build () {
  await run(clean)
  await run(copy)
  await run(bundle)
}

run(build)
