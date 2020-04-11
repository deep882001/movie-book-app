/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { hot } from 'react-hot-loader'
import styled from '@emotion/styled'
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
class App extends React.Component {
  render() {
    return (
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
        <Button primary>Primary Styled Button</Button>
        <Button>Styled Button Emotion</Button>
      </div>
    )
  }
}

export default hot(module)(App)
