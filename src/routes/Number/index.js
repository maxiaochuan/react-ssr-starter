'use strict'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NumberContainer extends Component {
  render () {
    return (
      <div>
        <h1>Number Page</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.number,
})

export default connect(mapStateToProps)(NumberContainer)
