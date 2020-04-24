import React from 'react'
import { StoreConsumer } from '../context/StoreContext'
import MovieListing from './MovieListing'

const Favorites = () => (
  <StoreConsumer>
    {context => <MovieListing listing={Object.keys(context.favorites)} />}
  </StoreConsumer>
)

Favorites.propTypes = {}

export default Favorites
