'use strict'
import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Link } from 'react-router'
import s from './Home.css'

class HomeContainer extends Component {
  render () {
    return (
      <div className={s.home}>
        <h1>Home 123</h1>
        <Link to="number">Number</Link>
      </div>
    )
  }
}

export default withStyles(s)(HomeContainer)
// export default HomeContainer
