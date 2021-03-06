'use strict'
import { Component, PropTypes, Children } from 'react'

class WithStylesContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onInsertCss: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  };

  getChildContext () {
    return { insertCss: this.props.onInsertCss }
  }

  render () {
    return Children.only(this.props.children)
  }
}

export default WithStylesContext
