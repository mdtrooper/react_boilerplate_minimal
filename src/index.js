import React from 'react'
import { Provider } from 'mobx-react'
import { render } from 'react-dom'

import * as store from './test.store'

import App from './app'

const root = document.getElementById('root')
if (root) {
  render(<div>
    <Provider {...store}>
      <App text="Hello world" />
    </Provider>
    <h1>Goodbye world</h1>
  </div>, root)
}
