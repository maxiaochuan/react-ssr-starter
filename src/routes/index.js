'use strict'
import React from 'react'
import HomeContainer from './Home'
import NumberContainer from './Number'
import WelcomeContainer from './Welcome'
import App from '../components/App'
import Match from 'react-router/Match'
// import MatchAsync from '../components/MatchAsync'

const routeMap = [
  {
    pattern: '/',
    exactly: true,
    component: HomeContainer,
  },
  {
    pattern: 'number',
    component: NumberContainer,
  },
  {
    pattern: 'welcome',
    component: WelcomeContainer,
  },
]

// async function load () {
//   let result
//   if (process.env.BROWSER) {
//     result = await System.import('./Number')
//   } else {
//     result = (<div>loading...</div>)
//   }
//   return result
// }

// const asyncRouteMap = [
//   {
//     pattern: 'number',
//     render (matchProps) {
//       return (
//         <div>
//           {load()}
//         </div>
//       )
//     }
//     getComponent () {
//       System.import('./Number')
//     },
//   },
// ]

export default props => (
  <App {...props}>
    {routeMap.map((route, i) => (<Match key={i} {...route}/>))}
    {/* !process.env.BROWSER ? null : asyncRouteMap.map((route, i) =>
      (<Match key={i} {...route}/>)) */}
  </App>
)

// export default props => (
//   <App {...props}>
//     <Match exactly pattern="/" component={HomeContainer} />
//     <Match pattern="/number" component={NumberContainer} />
//     <Match pattern="/welcome" component={WelcomeContainer} />
//   </App>
// )
