import React from 'react'
import PropTypes from 'prop-types'

import { sum } from './functions.js'

import { app } from './app.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)

    this.state = { text: props.text, mouse: 0 }
  }

  _onMouseEnter () {
    this.setState({ mouse: 1 })
  }

  _onMouseLeave () {
    this.setState({ mouse: 0 })
  }

  render () {
    return <h1 className={app}
      onMouseEnter={this._onMouseEnter}
      onMouseLeave={this._onMouseLeave}>{this.state.text} (mouse {this.state.mouse})
      <br />
      {sum(5, 5)}</h1>
  }
}

App.propTypes = {
  text: PropTypes.string
}
