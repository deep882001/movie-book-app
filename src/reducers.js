// rootReducer.js
import { combineReducers } from 'redux'
import moviesReducer from './containers/MovieListings/reducer'
import seatsReducer from './containers/SeatSelector/reducer'
import bookingReducer from './containers/Booking/reducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  seats: seatsReducer,
  booking: bookingReducer
})

export default rootReducer
