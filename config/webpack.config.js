'use strict'
import path from 'path'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import merge from 'webpack-merge'

const NODE_ENV = process.env.NODE_ENV

const isDebug = NODE_ENV !== 'production'
const isVerbose = process.argv.includes('--isVerbose')

const config = {
  output: {
    path: path.resolve(__dirname, '../build/public/assets/'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'stage-0',
                'react',
              ],
              plugins: [
                'transform-runtime',
                ...!isDebug ? [] : [
                  'transform-react-jsx-source',
                  'transform-react-jsx-self',
                ],
              ],
            },
          },
        ],
      },
      {
        test: /.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDebug,
              localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
              minimize: !isDebug,
              discardComments: { removeAll: true },
              // importLoaders: 1,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', 'scss'],
    modules: [
      'node_modules',
      'src',
    ],
  },

  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },
}

const clientConfig = merge(config, {
  entry: {
    client: !isDebug ? './src/client.js' : [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/client.js',
    ],
  },
  output: {
    publicPath: '/assets/',
    filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDebug ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
  },

  target: 'web',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        BROWSER: true,
      },
      '__DEV__': isDebug,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: 'manifest',
      chunks: ['vendor'], // Specify the common bundle's name.
    }),
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.js',
      processOutput: x => `module.exports = ${JSON.stringify(x, null, 2)};`,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: !isDebug,
      debug: isDebug,
    }),
    ...!isDebug ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: isVerbose,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  ],

  devtool: isDebug ? 'cheap-module-source-map' : false,
})

const serverConfig = merge(config, {
  entry: {
    server: './src/server.js',
  },
  output: {
    filename: '../../server.js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      '__DEV__': isDebug,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],

  target: 'node',

  externals: [
    /^\.\/assets$/,
    (context, request, callback) => {
      const isExternal =
        request.match(/^[@a-z][a-z/.\-0-9]*$/i) &&
        !request.match(/\.(css|less|scss|sss)$/i)
      callback(null, Boolean(isExternal))
    },
  ],

  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },

  devtool: isDebug ? 'cheap-module-source-map' : 'source-map',
})

export default [clientConfig, serverConfig]
