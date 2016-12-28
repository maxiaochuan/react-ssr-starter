import React from 'react'
import { BrowserRouter } from 'react-router'
import ReactDOM from 'react-dom'
import createRoutes from './routes'
import { Provider } from 'react-redux'
import makeStore from './store/createStore'

// const { pathname, search, hash } = window.location
// const location = `${pathname}${search}${hash}`

const initialState = window.___INITIAL_STATE__

const MOUNT_NODE = document.getElementById('root')
const store = makeStore(initialState)

let onRenderComplete = function initialRenderComplete () {
  let elem = document.getElementById('css')
  if (elem) {
    elem.parentNode.removeChild(elem)
  }
  onRenderComplete = function renderComplete () {
    // document.title = route.title
  }
}

let renderProps = {
  onInsertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss())
    return () => removeCss.forEach(f => f())
  },
}

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        {createRoutes(renderProps)}
      </BrowserRouter>
    </Provider>,
    MOUNT_NODE,
    () => onRenderComplete()
  )
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = () => {
      const createRoutes = require('./routes').default
      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            {createRoutes(renderProps)}
          </BrowserRouter>
        </Provider>,
        MOUNT_NODE,
        () => onRenderComplete()
      )
    }
    const renderError = error => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(
        <RedBox error={error}/>, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes', () => setImmediate(() => render()))
  }
}

render()
