import React from 'react'
import PropTypes from 'prop-types'

export const StoreContext = React.createContext()

export class AppStoreProvider extends React.Component {
  propTypes = {
    children: PropTypes.node
  }

  state = {
    favorites: {}
  }

  ENDPOINT = `https://www.omdbapi.com/?apikey=341b5a16`

  render() {
    return (
      <StoreContext.Provider
        store={{
          ...this.state,
          addToFavorite: movieData => {
            this.setState({
              favorites: {
                ...this.state.favorites,
                [movieData.imdbId]: movieData
              }
            })
          },
          ENDPOINT: this.ENDPOINT
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
