/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { Booking } from './containers/Booking'
import { MovieListings } from './containers/MovieListings'

import Logo from './assets/logo.svg'

const App = () => (
  <BrowserRouter>
    <div>
      <div
        css={css`
          position: relative;
          width: 50%;
          margin: 0 auto;
          text-align: center;
        `}
      >
        <Logo
          css={css`
            width: 240px;
          `}
        />
        <nav
          css={css`
            margin: 1em 0;
          `}
        >
          <ul>
            <li>
              <Link to="/">Listings</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/" exact component={MovieListings} />
          <Route
            path="/:imdbID"
            render={({ match }) => {
              return <Booking imdbID={match.params.imdbID} />
            }}
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default hot(module)(App)
