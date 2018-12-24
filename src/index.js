import React from 'react'
import { render } from 'react-dom'

import App from './app'

const root = document.getElementById('root')
if (root) {
  render(<div>
    <App text="Hello world" />
    <h1>Goodbye world</h1>
  </div>, root)
}
