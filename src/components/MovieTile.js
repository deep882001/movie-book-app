/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import { getDetailsById } from '../api'

class MovieTile extends React.Component {
  static propTypes = {
    isFavorite: PropTypes.bool,
    imdbId: PropTypes.string.isRequired,
    toggleFavorite: PropTypes.func.isRequired
  }

  state = {
    movie: null
  }

  componentDidMount() {
    getDetailsById(this.props.imdbId).then(response => {
      this.setState({
        movie: response.data
      })
    })
  }

  toggleFavorite = () => {
    this.props.toggleFavorite(this.state.movie)
  }

  render() {
    const { movie } = this.state
    return (
      movie && (
        <div
          css={css`
            position: relative;
            width: 25%;
            flex: 1 0 auto;
            border: ${this.props.isFavorite
              ? '2px solid red'
              : '2px solid darkgrey'};
          `}
        >
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <img src={movie.Poster} alt={movie.Title} />
          <button
            css={css`
              display: inline-block;
              background-color: goldenrod;
              font-weight: bold;
              padding: 1em;
              font-size: 1em;
              text-align: center;
            `}
            onClick={this.toggleFavorite}
          >
            {this.props.isFavorite ? 'Remove from' : 'Add to'} Favorites
          </button>
        </div>
      )
    )
  }
}

export default MovieTile
