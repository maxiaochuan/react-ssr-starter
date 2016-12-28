'use strict'
/**
 * Start
 */
import run from '../tools/run'
import clean from '../tools/clean'
import copy from '../tools/copy'
import hot from '../tools/hot'

async function start () {
    await run(clean)
    await run(copy)
    await run(hot)
}

run(start)
