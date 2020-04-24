import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js'
import { ThemeProvider } from 'emotion-theming'
import App from './App'
import './styles.css'
import theme from './theme'
import { StoreProvider } from './context/StoreContext'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('app')
)
