import { createSelector } from 'reselect'

const getMovies = state => state.movies.listings
const getFavorites = state => state.movies.favorites

export const getListings = createSelector(
  getMovies,
  getFavorites,
  (movies, favorites) => {
    return movies.map(item => ({
      ...item,
      favorite: favorites.indexOf(item.imdbID) > -1
    }))
  }
)
