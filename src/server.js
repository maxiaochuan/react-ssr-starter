'use strict'
/**
 * Server
 */
import 'babel-polyfill'
import express from 'express'
import React from 'react'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/server'
import path from 'path'
import Html from './components/Html'
import makeStore from './store/createStore'
import createRoutes from './routes'
import assets from './assets'
import fetch from 'node-fetch'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV !== 'production') {
  app.enable('trust proxy')
}

app.get('/api/number', function (req, res) {
  res.json({ number: 10 })
})

app.get('*', async (req, res, next) => {
  // first create a context for <ServerRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = createServerRenderContext()
  const css = new Set()
  const props = {}
  props.onInsertCss = (...styles) => styles.forEach(style => {
    css.add(style._getCss())
  })

  let initialState = {}

  if (req.url === '/number') {
    const data = await fetch('http://localhost:3000/api/number').then(res => res.json())
    Object.assign(initialState, data)
  }

  const store = makeStore(initialState)

  // render the first time
  let markup = ReactDOM.renderToString(
    <Provider store={store}>
      <ServerRouter
        location={req.url}
        context={context}
      >
        {createRoutes(props)}
      </ServerRouter>
    </Provider>
  )

  // get the result
  const result = context.getResult()

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (result.redirect) {
    res.writeHead(301, {
      Location: result.redirect.pathname,
    })
    res.end()
  } else {
    // the result will tell you if there were any misses, if so
    // we can send a 404 and then do a second render pass with
    // the context to clue the <Miss> components into rendering
    // this time (on the client they know from componentDidMount)
    if (result.missed) {
      res.writeHead(404)
      markup = ReactDOM.renderToString(
        <Provider store={store}>
          <ServerRouter
            location={req.url}
            context={context}
          >
            {createRoutes(props)}
          </ServerRouter>
        </Provider>
      )
    }
    const data = {}
    data.style = [...css].join('')
    data.children = markup
    data.initialState = store.getState()
    data.scripts = [assets.manifest.js, assets.vendor.js, assets.client.js]
    const html = ReactDOM.renderToStaticMarkup(<Html {...data}></Html>)
    res.send(`<!doctype html>${html}`)
  }
})

app.listen(3000, () => {
  console.log(`The server is running at http://localhost:3000/`)
})
