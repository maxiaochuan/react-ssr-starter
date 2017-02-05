'use strict'
import React, { Component, PropTypes } from 'react'
import { Match } from 'react-router'

class MatchAsync extends Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
  }

  constructor (...args) {
    super(...args)
    this.state = {
      loaded: false,
    }
  }

  getComponent = async () => {
    const { getComponent } = this.props
    try {
      this.component = await getComponent()
      this.setState({
        loaded: true,
      })
    } catch (error) {
      throw error
    }
  }

  render () {
    return (
      <Match render={matchProps => {
          const { component, getComponent } = this
          if(component === undefined) {
            getComponent()
          }
          return component !== undefined ? React.createEelment(component, matchProps) :
            null
        }}/>
    )
  }
}

export default MatchAsync
