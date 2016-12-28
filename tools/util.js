'use strict'
import fs from 'fs-extra'
import path from 'path'
import Promise from 'bluebird'
Promise.promisifyAll(fs)
// export const getType = Object.prototype.toString

// export const isArray = arr => arr && getType.call(arr) === '[object Array]'

// export const isString = str => str && getType.call(str) === '[object String]'

export const ROOT = path.resolve(__dirname, '../')

export const readFileAsync = file => fs.readFileAsync(file, 'utf8')

export const writeFileAsync = (file, contents) => fs.writeFileAsync(file, contents, 'utf8')

export const mkdirsAsync = dir => fs.mkdirsAsync(path.join(ROOT, dir))

export const removeAsync = dir => fs.removeAsync(path.join(ROOT, dir))

export const copyAsync = (source, target) => fs.copyAsync(source, target)
