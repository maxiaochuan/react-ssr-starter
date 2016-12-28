'use strict'
import React from 'react'
import HomeContainer from './Home'
import NumberContainer from './Number'
import WelcomeContainer from './Welcome'
import App from '../components/App'
import Match from 'react-router/Match'
import MatchAsync from '../components/MatchAsync'

const routeMap = [
  {
    pattern: '/',
    exactly: true,
    component: HomeContainer,
  },
]

const asyncRouteMap = [
  {
    pattern: 'number',
    getComponent () {
      System.import('./Number')
    },
  },
]

export default props => (
  <App {...props}>
    {routeMap.map((route, i) => (<Match key={i} {...route}/>))}
    {!process.env.BROWSER ? <span/> : asyncRouteMap.map((route, i) =>
      (<MatchAsync key={i} {...route}/>))}
  </App>
)

// export default props => (
//   <App {...props}>
//     <Match exactly pattern="/" component={HomeContainer} />
//     <Match pattern="/number" component={NumberContainer} />
//     <Match pattern="/welcome" component={WelcomeContainer} />
//   </App>
// )
