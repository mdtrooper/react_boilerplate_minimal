import React from 'react'
import PropTypes from 'prop-types'

import { app } from './app.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: props.text, mouse: 0 }
  }

  _onMouseEnter() {
    this.setState({mouse: 1})
  }

  _onMouseLeave() {
    this.setState({mouse: 0})
  }

  render () {
    return <h1 className={app} onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>{this.state.text} (mouse {this.state.text})</h1>
  }
}

App.propTypes = {
  text: PropTypes.string
}
