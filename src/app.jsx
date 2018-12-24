import React from 'react'
import { app } from './app.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: props.text }
  }

  render () {
    return <h1 className={app}>{this.state.text}</h1>
  }
}
