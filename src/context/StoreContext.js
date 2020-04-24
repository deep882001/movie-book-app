import React from 'react'
import PropTypes from 'prop-types'

let StoreContext
const { Provider, Consumer } = (StoreContext = React.createContext({
  favorites: {}
}))

class StoreProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    favorites: {}
  }

  isFavorite = imdbId => Boolean(this.state.favorites[imdbId])

  toggleFavorite = movieData => {
    if (this.state.favorites[movieData.imdbID]) {
      const favorites = Object.assign({}, this.state.favorites)
      delete favorites[movieData.imdbID]
      this.setState({
        favorites
      })
    } else {
      this.setState({
        favorites: {
          ...this.state.favorites,
          [movieData.imdbID]: movieData
        }
      })
    }
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          toggleFavorite: this.toggleFavorite,
          isFavorite: this.isFavorite
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { StoreProvider, Consumer as StoreConsumer }
export default StoreContext
