import {
  SEARCH_MOVIES_LOAD,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  FETCH_DETAILS_ERROR,
  FETCH_DETAILS_SUCCESS
} from './actions'

const initialState = {
  listings: [],
  listingError: null,
  details: {},
  detailsError: null,
  searchKeywords: '',
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, isLoading: false, listings: action.data }
    case SEARCH_MOVIES_ERROR:
      return { ...state, isLoading: false, listingError: action.data }
    case FETCH_DETAILS_SUCCESS:
      return { ...state, details: action.data }
    case FETCH_DETAILS_ERROR:
      return { ...state, detailsError: action.data }
    case SEARCH_MOVIES_LOAD:
      return { ...state, listingError: null, isLoading: action.data }
    default:
      return state
  }
}
