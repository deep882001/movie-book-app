/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { TicketType, updateTickets } from './actions'
import { fetchDetailsByID } from '../MovieListings/actions'

class Booking extends React.Component {
  componentDidMount() {
    const { fetchDetailsByID, imdbID } = this.props
    fetchDetailsByID(imdbID)
  }

  render() {
    const { adultTickets, childTickets, updateTickets, movie } = this.props
    return (
      <div
        css={css`
          display: flex;
        `}
      >
        <img src={movie.Poster} alt="Poster" />
        <div>
          <h3>Adult</h3>
          <input
            type="number"
            value={adultTickets}
            onChange={event => {
              updateTickets(TicketType.ADULT, parseInt(event.target.value))
            }}
          />
        </div>
        <div>
          <h3>Child</h3>
          <input
            type="number"
            value={childTickets}
            onChange={event => {
              updateTickets(TicketType.CHILD, parseInt(event.target.value))
            }}
          />
        </div>
      </div>
    )
  }
}

Booking.propTypes = {
  imdbID: PropTypes.string,
  adultTickets: PropTypes.number,
  childTickets: PropTypes.number,
  fetchDetailsByID: PropTypes.func
}

function mapStateToProps(state) {
  return { ...state.booking, movie: state.movies.details }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetailsByID, updateTickets }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
