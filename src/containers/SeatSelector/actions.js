const SELECT_SEAT = 'SELECT_SEAT'
const DESELECT_SEAT = 'DESELECT_SEAT'

const selectSeat = id => ({
  type: SELECT_SEAT,
  data: id
})

const deselectSeat = id => ({
  type: DESELECT_SEAT,
  data: id
})

export { selectSeat, deselectSeat, SELECT_SEAT, DESELECT_SEAT }
