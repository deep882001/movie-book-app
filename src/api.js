import axios from 'axios'

const ENDPOINT = `https://www.omdbapi.com/?apikey=341b5a16`

export const getDetailsById = imdbId => axios.get(`${ENDPOINT}&i=${imdbId}`)

export const searchMovies = keywords =>
  axios.get(`${ENDPOINT}&s=${escape(keywords)}`)
