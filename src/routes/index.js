'use strict'
import React from 'react'
import HomeContainer from './Home'
import NumberContainer from './Number'
import WelcomeContainer from './Welcome'
import App from '../components/App'
import Match from 'react-router/Match'

export default props => (
  <App {...props}>
    <Match exactly pattern="/" component={HomeContainer} />
    <Match pattern="/number" component={NumberContainer} />
    <Match pattern="/welcome" component={WelcomeContainer} />
  </App>
)
