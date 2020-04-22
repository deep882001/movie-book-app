import React from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="my-styled-heading">High Performance Web Development!</h1>
      </div>
    )
  }
}

export default hot(module)(App)
