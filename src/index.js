import React from 'react'
import { render } from 'react-dom'

import App from './app'

const root = document.getElementById('root')
if (root) render(<App text="Hello world" />, root)