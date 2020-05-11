/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieItem = ({ imdbID, favorite, Poster, Title, onToggleFavorite }) => (
  <li
    css={css`
      position: relative;
      flex: 0 0 auto;
      width: 25%;
      padding: 1em;
      background-color: ${favorite ? 'yellow' : ''};
    `}
  >
    <img src={Poster} alt="Poster" />
    <Link to={`/${imdbID}`}>
      <h3>{Title}</h3>
    </Link>
    <button
      css={css`
        display: inline-block;
        position: absolute;
        background-color: yellow;
        border: none;
        top: 30px;
        right: 40px;
      `}
      onClick={() => onToggleFavorite(favorite, imdbID)}
    >
      {favorite ? (
        <span role="img" aria-label="Remove">
          ➖
        </span>
      ) : (
        <span role="img" aria-label="Add">
          ➕
        </span>
      )}
    </button>
  </li>
)
MovieItem.propTypes = {
  imdbID: PropTypes.string,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  favorite: PropTypes.bool,
  onToggleFavorite: PropTypes.func
}

export default React.memo(MovieItem)
