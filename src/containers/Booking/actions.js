const TicketType = {
  ADULT: 'ADULT',
  CHILD: 'CHILD'
}

const UPDATE_TICKETS = 'UPDATE_TICKETS'

const updateTickets = (ticketType, count) => ({
  type: UPDATE_TICKETS,
  data: {
    ticketType,
    count
  }
})

export { updateTickets, UPDATE_TICKETS, TicketType }
