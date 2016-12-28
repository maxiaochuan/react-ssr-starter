'use strict'
import webpack from 'webpack'
import browserSync from 'browser-sync'
import runServer from './runServer'
import webpackMiddleware from 'webpack-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../config/webpack.config'

async function hot () {
  await new Promise(resolve => {
    const bundler = webpack(webpackConfig)

    const wpMiddleware = webpackMiddleware(bundler, {
      publicPath: webpackConfig[0].output.publicPath,
      stats: webpackConfig[0].stats,
    })

    const hotMiddleware = webpackHotMiddleware(bundler.compilers[0])

    let handleBundleComplete = async() => {
      handleBundleComplete = stats => !stats.stats[1].compilation.errors.length && runServer()

      const server = await runServer()
      const bs = browserSync.create()

      bs.init({
        proxy: {
          target: server.host,
          middleware: [wpMiddleware, hotMiddleware],
          proxyOptions: {
            xfwd: true,
          },
        },
      }, resolve)
    }

    bundler.plugin('done', stats => handleBundleComplete(stats))
  })
}

export default hot
