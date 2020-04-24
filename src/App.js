/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { hot } from 'react-hot-loader'
import MovieListing from './components/MovieListing'
import Favorites from './components/Favorites'
import Mouse from './components/Mouse'
import Modal from './components/Modal'
import Logo from './assets/logo.svg'
import { searchMovies } from './api'

class App extends React.Component {
  state = {
    movies: [],
    modalVisibility: false
  }

  componentDidMount() {
    searchMovies('superman').then(response => {
      this.setState({
        movies: response.data.Search.map(movie => movie.imdbID)
      })
    })
  }

  showModal = () => {
    this.setState({ modalVisibility: true })
  }

  hideModal = () => {
    this.setState({ modalVisibility: false })
  }

  render() {
    return (
      <div
        css={theme => ({
          backgroundColor: theme.colors.background
        })}
      >
        <Mouse>
          {({ x, y }) => (
            <React.Fragment>
              <div
                css={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  width: '240px'
                }}
              >
                <Logo />
                <Favorites />
              </div>
              <MovieListing listing={this.state.movies} />
              <button
                disabled={this.state.modalVisibility}
                onClick={this.showModal}
              >
                Show modal
              </button>
              {this.state.modalVisibility && (
                <Modal className="modal">
                  <div className="modal-content">
                    <p>
                      With a portal, we can render content into a different part
                      of the DOM, as if it were any other React child.
                    </p>
                    <p>
                      This is being rendered inside the #modal-container div.
                    </p>
                    <button onClick={this.hideModal}>Hide modal</button>
                  </div>
                </Modal>
              )}
            </React.Fragment>
          )}
        </Mouse>
      </div>
    )
  }
}

export default hot(module)(App)
