/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import Entry from './Entry'

const Listing = ({ entries }) => (
  <ul
    css={() => `
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      `}
  >
    {entries.map(item => (
      <Entry key={item.imdbID} {...item} />
    ))}
  </ul>
)

Listing.propTypes = {
  entries: PropTypes.array
}

export default Listing
