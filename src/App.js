/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { hot } from 'react-hot-loader'
import styled from '@emotion/styled'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Logo from './assets/logo.svg'

const Heading = styled.h1(
  {
    fontSize: '2em',
    ['@media (min-width: 768px)']: {
      fontSize: '3em'
    }
  },
  props => ({ color: props.color || '#111' })
)

const Button = styled.button`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 1em;
  border: 2px solid transparent;
  &:hover {
    border-color: blue;
  }
  &:active {
    border-style: inset;
  }
  @media (min-width: 768px) {
    font-size: 1.25em;
  }
  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
  @media (min-width: 1280px) {
    font-size: 2em;
  }
`

const Home = () => (
  <>
    <Button primary>Primary Styled Button</Button>
    <Button>Styled Button Emotion</Button>
  </>
)

const About = () => (
  <>
    <p>
      Learn the building blocks of developing performant web apps from the
      ground up using the latest tools in the React ecosystem. You’ll learn key
      skills like component design patterns, state management with Redux,
      CSS-in-JS, analyzing performance in the browser, etc.
    </p>
    <p>
      Prerequisites:
      <ul>
        <li>
          You have a good understanding of web technologies - HTML, CSS &
          JavaScript.
        </li>
        <li>
          You want to up your game as a Frontend Engineer and start your journey
          to building performant web apps using React.
        </li>
      </ul>
    </p>
  </>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div
          css={theme => ({
            backgroundColor: theme.colors.background
          })}
        >
          <div
            css={{
              width: '240px'
            }}
          >
            <Logo />
          </div>
          <Heading>High Performance Web Development!</Heading>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
