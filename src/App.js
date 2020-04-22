/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { hot } from 'react-hot-loader'
import MovieTile from './components/MovieTile'
import Modal from './components/Modal'
import Logo from './assets/logo.svg'

const Heading = ({ children }) => <h3>{children}</h3>
const Span = ({ children }) => <span>{children}</span>

const withFlexContainer = WrappedComponent => props => (
  <div style={{ display: 'flex' }}>
    <WrappedComponent {...props} />
  </div>
)

const withColoredText = WrappedComponent => {
  return class extends React.Component {
    state = {
      color: 'red'
    }

    changeColor = () => {
      this.setState({
        color: 'green'
      })
    }

    render() {
      return (
        <div style={{ color: this.state.color }}>
          <WrappedComponent {...this.props} />
          <button onClick={this.changeColor}>Change Color</button>
        </div>
      )
    }
  }
}

const FlexHeading = withFlexContainer(Heading)
const ColoredHeading = withColoredText(FlexHeading)
const ColoredSpan = withColoredText(Span)

class App extends React.Component {
  state = {
    showModal: false
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

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
        <FlexHeading>Plain Heading</FlexHeading>
        <ColoredHeading>Colored Heading</ColoredHeading>
        <ColoredSpan>Colored Span</ColoredSpan>
        <div>
          <MovieTile imdbId="tt5817168" />
        </div>
        <div>
          <button onClick={this.handleShow}>Show modal</button>
          {this.state.showModal && (
            <Modal>
              <div className="modal">
                <div>
                  With a portal, we can render content into a different part of
                  the DOM, as if it were any other React child.
                </div>
                This is being rendered inside the #modal-container div.
                <button onClick={this.handleHide}>Hide modal</button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
