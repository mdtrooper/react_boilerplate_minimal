import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import { sum } from './functions.js'

import { app } from './app.css'

@inject('store')
@observer
export default class App extends React.Component {
  constructor (props) {
    super(props)

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = { text: props.text, mouse: 0, value: '' }
  }

  _onMouseEnter () {
    this.setState({ mouse: 1 })
  }

  _onMouseLeave () {
    this.setState({ mouse: 0 })
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return <div>
      <h1 className={app}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>{this.state.text} (mouse {this.state.mouse})
        <br />
        {sum(5, 5)}</h1>
      <h2>Store Count: {this.props.store.Count}</h2>
      {this.props.store.things.map(thing => <p key={thing}>{thing}</p>)}
      <h2>Add to store:</h2>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <input type="button" onClick={x => this.props.store.add(this.state.value)} value="ADD" />
    </div>
  }
}

App.propTypes = {
  text: PropTypes.string,
  store: PropTypes.object.isRequired
}
