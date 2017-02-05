'use strict'
import React, { Component, PropTypes } from 'react'

class Html extends Component {
  static propTypes = {
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    styles: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string.isRequired,
    initialState: PropTypes.object.isRequired,
  }

  render () {
    const { scripts, children, styles, initialState } = this.props
    return (
      <html>
        <head>
          <meta charset="utf-8"></meta>
          <title></title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          {styles && styles.map(style => <link href={style} rel="stylesheet" />)}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{
            __html: `window.___INITIAL_STATE__ = ${JSON.stringify(initialState)}`,
          }}>
          </script>
          {scripts && scripts.map(script => <script key={script} src={script} />)}
        </body>
      </html>
    )
  }
}

export default Html
