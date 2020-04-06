import React from 'react'
import { hot } from 'react-hot-loader'
import Button from 'components/Button'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="p-4 text-2xl md:text-3xl lg:text-4xl">
          High Performance Web Development!
        </h1>
        <Button type="3d">My 3D Button</Button>
        <Button type="icon">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </Button>
        <Button>Default Button</Button>
        <Button type="" className="customButton">
          Custom Button
        </Button>
      </div>
    )
  }
}

export default hot(module)(App)
