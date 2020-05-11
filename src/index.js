import 'core-js'
import React, { Profiler } from 'react'
import ReactDOM, { render } from 'react-dom'
import { unstable_trace as trace } from 'scheduler/tracing'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'

import App from './App'
import theme from './theme'
import configureStore from './configureStore'

import './styles.css'

const store = configureStore()

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const onRender = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  /* eslint-disable no-console */
  console.log(`${id}'s ${phase} phase:`)
  console.log(`Actual time: ${actualTime}`)
  console.log(`Base time: ${baseTime}`)
  console.log(`Start time: ${startTime}`)
  console.log(`Commit time: ${commitTime}`)
  /* eslint-enable no-console */
}

trace('initial render', performance.now(), () =>
  render(
    <Profiler id="Application" onRender={onRender}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Profiler>,
    document.getElementById('app')
  )
)
