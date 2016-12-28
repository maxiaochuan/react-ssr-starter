'use strict'
import React, { Component, PropTypes } from 'react'
import Canvas from './Canvas'

class WelcomeContainer extends Component {

  componentDidMount () {
    if (process.env.BROWSER) {
      const { canvas } = this.refs
      const control = new Canvas(canvas)
      control.draw()
    }
  }

  render () {
    return (
      <canvas ref="canvas"></canvas>
    )
  }
}

export default WelcomeContainer
