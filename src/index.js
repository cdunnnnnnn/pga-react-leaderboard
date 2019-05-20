import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'

import './scss/styles.scss'

import App from './components/App'

render(<App />, document.getElementById('root'))
