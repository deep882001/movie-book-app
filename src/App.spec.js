import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'

import App from './App'
import theme from './theme'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  movies: {
    listings: [],
    listingError: null,
    details: {},
    detailsError: null,
    searchKeywords: '',
    isLoading: false
  },
  seats: {
    bookedSeats: [],
    availableSeats: [],
    totalSeats: 0
  },
  booking: {
    adultTickets: 0,
    childTickets: 0,
    selectedSeats: [],
    couponCode: '',
    totalPrice: '',
    tax: 0
  }
})

describe('App', () => {
  it('Renders without error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    )
  })
})
