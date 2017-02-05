'use strict'
import React, { Component, PropTypes } from 'react'

// const ContextType = {
//   // Enables critical path CSS rendering
//   // https://github.com/kriasoft/isomorphic-style-loader
//   insertCss: PropTypes.func.isRequired,
// }

class App extends Component {

  // static propTypes = {
  //   onInsertCss: PropTypes.func.isRequired,
  // }
  //
  // static childContextTypes = {
  //   insertCss: PropTypes.func.isRequired,
  // }
  //
  // getChildContext () {
  //   return { insertCss: this.props.onInsertCss }
  // }

  render () {
    return (<div>{this.props.children}</div>)
  }
}

// class App extends Component {
//   render () {
//     return (<div>{this.props.children}</div>)
//   }
// }

export default App
