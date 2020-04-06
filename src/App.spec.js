import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import App from './App'
import theme from './theme'

describe('App', () => {
  it('Renders without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  })
})
