import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class MovieTile extends React.Component {
  static propTypes = {
    imdbId: PropTypes.string.isRequired,
    addToFavorite: PropTypes.func.isRequired
  }

  state = {
    movie: null
  }

  componentDidMount() {
    axios.get(`${this.ENDPOINT}&i=${this.props.imdbId}`).then(response => {
      this.setState({
        movie: response.data
      })
    })
  }

  addToFavorite = () => {
    this.props.addToFavorite(this.state.movie)
  }

  render() {
    const { movie } = this.state
    return (
      movie && (
        <div>
          <h1>
            {movie.Title} ({movie.Year})
          </h1>
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={this.addToFavorite}>Add to Favorites</button>
        </div>
      )
    )
  }
}

export default MovieTile
