const API_KEY = '341b5a16'

const getSearch = (keywords, page = 1) =>
  `https://www.omdbapi.com/?apikey=${API_KEY}&s=${escape(
    keywords
  )}&page=${page}`

const getByTitle = title =>
  `https://www.omdbapi.com/?apikey=${API_KEY}&t=${escape(title)}`

const getByImdbID = imdbID =>
  `https://www.omdbapi.com/?apikey=${API_KEY}&i=${escape(imdbID)}`

export { getSearch, getByTitle, getByImdbID }
