/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { unstable_trace as trace } from 'scheduler/tracing'

import { addFavorite, removeFavorite, search } from './actions'
import { getListings } from './selectors'

import MovieItem from '../../components/MovieItem'

class MovieListings extends React.Component {
  static propTypes = {
    listings: PropTypes.array,
    search: PropTypes.func
  }

  state = { keywords: '' }

  constructor(props) {
    super(props)
    this.mounted = false
  }

  componentDidMount() {
    this.mounted = true
    window.performance.mark('MovieListingsMountEnd')
    window.performance.measure(
      'MovieListingsMount',
      'MovieListingsMountStart',
      'MovieListingsMountEnd'
    )
  }

  componentDidUpdate() {
    window.performance.mark('MovieListingsUpdateEnd')
    window.performance.measure(
      'MovieListingsUpdate',
      'MovieListingsUpdateStart',
      'MovieListingsUpdateEnd'
    )
  }

  onChange = event => {
    this.setState({
      keywords: event.target.value
    })
  }

  onToggleFavorite = (favorite, imdbID) => {
    trace('Toggle Favorite', performance.now(), () => {
      if (favorite) {
        this.props.removeFavorite(imdbID)
      } else {
        this.props.addFavorite(imdbID)
      }
    })
  }

  render() {
    if (this.mounted) {
      window.performance.mark('MovieListingsUpdateStart')
    } else {
      window.performance.mark('MovieListingsMountStart')
    }
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
                {listings.map((item, index) => (
                  <MovieItem
                    key={index}
                    {...item}
                    onToggleFavorite={this.onToggleFavorite}
                  />
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

const mapStateToProps = state => {
  return {
    listings: getListings(state),
    search: state.movies.search,
    isLoading: state.movies.isLoading,
    listingError: state.movies.listingError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFavorite, removeFavorite, search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListings)
