/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { search } from './actions'
// import { getListings } from './selectors'

class MovieListings extends React.Component {
  state = { keywords: '' }

  onChange = event => {
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
    const { listings, listingError, search, isLoading } = this.props
    return (
      <div
        css={css`
          text-align: center;
        `}
      >
        <input type="text" onChange={this.onChange} />
        <button
          onClick={() => {
            search(this.state.keywords)
          }}
        >
          Search
        </button>
        {isLoading ? (
          <span>Loading ...</span>
        ) : (
          <>
            {!listingError ? (
              <ul
                css={css`
                  display: flex;
                  align-content: flex-start;
                  align-items: flex-start;
                  flex-wrap: wrap;
                `}
              >
                {listings.map(item => (
                  <li
                    key={item.imdbID}
                    css={css`
                      flex: 1 0 auto;
                      width: 25%;
                      padding: 1em;
                    `}
                  >
                    <img src={item.Poster} alt="Poster" />
                    <Link to={`/${item.imdbID}`}>
                      <h3>{item.Title}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Sorry, there was an error.</span>
            )}
          </>
        )}
      </div>
    )
  }
}

MovieListings.propTypes = {
  listings: PropTypes.array,
  search: PropTypes.func
}

const mapStateToProps = state => {
  return { ...state.movies }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListings)
