import React from 'react'
import { StoreContext } from '../context/StoreContext'
import MovieTile from './MovieTile'

const MovieListing = () => {
  const listing = ['tt0096895', 'tt0078346', 'tt0231426']
  return (
    <StoreContext.Consumer>
      {context =>
        listing.map(imdbId => (
          <MovieTile
            key={imdbId}
            imdbId={imdbId}
            addToFavorite={context.addToFavorite}
          />
        ))
      }
    </StoreContext.Consumer>
  )
}

export default MovieListing
