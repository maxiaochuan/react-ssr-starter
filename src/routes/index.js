'use strict'
import React from 'react'
import HomeContainer from './Home'
import NumberContainer from './Number'
import WelcomeContainer from './Welcome'
import App from '../components/App'
import { Route } from 'react-router-dom'
// import MatchAsync from '../components/MatchAsync'

const Com = () => <h1>h1</h1>

const routeMap = [
  {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  {
    path: 'number',
    // component: NumberContainer,
    component: Com,
  },
  {
    path: 'welcome',
    // component: WelcomeContainer,
    component: Com,
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
    {routeMap.map((route, i) => (<Route key={i} {...route}/>))}
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
