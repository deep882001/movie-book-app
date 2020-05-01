import { createSelector } from 'reselect'

const getMovies = state => state.listings
const getGenre = state => state.activeGenre

export const getListings = createSelector(
  [getMovies, getGenre],
  (movies, genre) =>
    movies.filter(item => item.genre.toLowerCase().indexOf(genre) > -1)
)
