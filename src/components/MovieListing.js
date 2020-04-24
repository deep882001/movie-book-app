/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { StoreConsumer } from '../context/StoreContext'
import MovieTile from './MovieTile'

const MovieListing = ({ listing }) => {
  return (
    <StoreConsumer>
      {context => (
        <ul
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-items: flex-start;
          `}
        >
          {listing.map(imdbId => (
            <MovieTile
              key={imdbId}
              imdbId={imdbId}
              toggleFavorite={context.toggleFavorite}
              isFavorite={context.isFavorite(imdbId)}
            />
          ))}
        </ul>
      )}
    </StoreConsumer>
  )
}

MovieListing.propTypes = {
  listing: PropTypes.array
}

export default MovieListing
