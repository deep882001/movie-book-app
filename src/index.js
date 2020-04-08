import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js'
import App from './App'
import './styles.css'
import './global.scss'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('app'))
