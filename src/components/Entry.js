/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Entry = ({ Title, Year, imdbID, Poster }) => (
  <li
    css={() => `
        width: 25%;
        padding: 1em;
        flex: none;
      `}
  >
    <h3>
      <Link to={`/listing/details/${imdbID}`}>{Title}</Link>
    </h3>
    <p>{Year}</p>
    <img src={Poster} alt={Title} />
  </li>
)

Entry.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  Poster: PropTypes.string
}

export default Entry
