import axios from 'axios'

import { getSearch, getByTitle, getByImdbID } from '../../api'

const SEARCH_MOVIES_LOAD = 'SEARCH_MOVIES_LOAD'
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR'

const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS'
const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR'

const search = keywords => dispatch => {
  dispatch(setSearchLoading(true))
  return axios
    .get(getSearch(keywords))
    .then(response => {
      dispatch(setSearchResults(response.data.Search))
    })
    .catch(error => {
      dispatch(setSearchResultsError(error))
    })
}

const setSearchLoading = active => ({
  type: SEARCH_MOVIES_LOAD,
  data: active
})

const setSearchResults = data => ({
  type: SEARCH_MOVIES_SUCCESS,
  data
})

const setSearchResultsError = data => ({
  type: SEARCH_MOVIES_ERROR,
  data
})

const fetchDetailsByTitle = title => dispatch => {
  return axios
    .get(getByTitle(title))
    .then(response => {
      dispatch(setDetailsResults(response.data))
    })
    .catch(error => {
      dispatch(setDetailsError(error))
    })
}

const fetchDetailsByID = imdbID => dispatch => {
  return axios
    .get(getByImdbID(imdbID))
    .then(response => {
      dispatch(setDetailsResults(response.data))
    })
    .catch(error => {
      dispatch(setDetailsError(error))
    })
}

const setDetailsResults = data => ({
  type: FETCH_DETAILS_SUCCESS,
  data
})

const setDetailsError = data => ({
  type: FETCH_DETAILS_ERROR,
  data
})

export {
  search,
  fetchDetailsByID,
  fetchDetailsByTitle,
  SEARCH_MOVIES_LOAD,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_ERROR
}
