/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Booking = lazy(() =>
  import('./containers/Booking').then(module => ({ default: module.Booking }))
)
const MovieListings = lazy(() =>
  import('./containers/MovieListings').then(module => ({
    default: module.MovieListings
  }))
)

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={MovieListings} />
          <Route
            path="/:imdbID"
            render={({ match }) => {
              return <Booking imdbID={match.params.imdbID} />
            }}
          />
        </Switch>
      </Suspense>
    </div>
  </BrowserRouter>
)

export default hot(module)(App)
