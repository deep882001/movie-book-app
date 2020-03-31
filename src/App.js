import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="p-4 text-2xl md:text-3xl lg:text-4xl">
          High Performance Web Development!
        </h1>
      </div>
    )
  }
}

export default hot(module)(App)
