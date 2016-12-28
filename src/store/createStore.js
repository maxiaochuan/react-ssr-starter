'use strict'
import { createStore, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { updateLocation } from './location'
import { makeRootReducer } from './reducers'

export default (initialState = {}) => {
  const middleware = []

  const enhancers = []
  if (__DEV__ && process.env.BROWSER) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(makeRootReducer(), initialState, compose(
    applyMiddleware(...middleware),
    ...enhancers
  ))

  // 创建asyncReducers存放异步加载进来的state
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  return store
}
