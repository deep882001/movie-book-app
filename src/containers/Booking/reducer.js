import { UPDATE_TICKETS, TicketType } from './actions'

const initialState = {
  adultTickets: 0,
  childTickets: 0,
  selectedSeats: [],
  couponCode: '',
  totalPrice: '',
  tax: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TICKETS: {
      const ticketType =
        action.data.ticketType === TicketType.ADULT
          ? 'adultTickets'
          : 'childTickets'
      return { ...state, [ticketType]: action.data.count }
    }
    default:
      return state
  }
}
