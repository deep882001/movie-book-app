/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { BASE_URL } from '../api'

class EntryDetails extends React.Component {
  state = {
    loading: false,
    data: {}
  }

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const ENDPOINT = `${BASE_URL}&i=${escape(this.props.match.params.id)}`
    axios
      .get(ENDPOINT)
      .then(response => {
        // eslint-disable-next-line
        this.setState({
          data: response.data,
          loading: false
        })
      })
      .catch(function(error) {
        // eslint-disable-next-line
        console.error('Error', error.toJSON())
      })

    this.setState({
      loading: true
    })
  }

  renderDetails = (key, index) => {
    const data = this.state.data[key]
    if (key === 'Poster') {
      return (
        <li
          key={index}
          css={{
            padding: '0.25em'
          }}
        >
          <img src={data} alt="" />
        </li>
      )
    }
    if (typeof data !== 'object' && data !== null) {
      return (
        <li
          key={index}
          css={{
            padding: '0.25em'
          }}
        >
          <strong
            css={{
              marginRight: '0.25em'
            }}
          >
            {key}
          </strong>
          <span>{data}</span>
        </li>
      )
    }
    return null
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> &nbsp;|&nbsp;{' '}
        <Link to="/listing">Listing</Link>
        {this.state.loading ? (
          <span>Loading ... </span>
        ) : (
          <ul>{Object.keys(this.state.data).map(this.renderDetails)}</ul>
        )}
      </div>
    )
  }
}

export default EntryDetails
