/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { BASE_URL } from './api'
import Button from './components/Button'
import EntryDetails from './components/EntryDetails'
import Listing from './components/Listing'
import Logo from './assets/logo.svg'

class App extends React.Component {
  state = {
    listing: []
  }

  load = (searchTerm = 'superman') => {
    const CancelToken = axios.CancelToken
    this.source = CancelToken.source()
    const ENDPOINT = `${BASE_URL}&s=${escape(searchTerm)}`
    axios
      .get(ENDPOINT, {
        cancelToken: this.source.token
      })
      .then(response => {
        // eslint-disable-next-line
        this.setState({
          listing: response.data.Search
        })
      })
      .catch(function(error) {
        if (axios.isCancel(error)) {
          // eslint-disable-next-line
          console.log('Request canceled', error.message)
        } else {
          // eslint-disable-next-line
          console.error('Error', error.toJSON())
        }
      })
  }

  cancel = () => {
    this.source.cancel('Operation canceled by the user.')
  }

  render() {
    const { listing } = this.state

    return (
      <BrowserRouter>
        <div
          css={theme => ({
            backgroundColor: theme.colors.background
          })}
        >
          <div
            css={() => `
              width: 240px;
              margin: 0 auto;
            `}
          >
            <Logo />
          </div>
          <main>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => {
                  return (
                    <div
                      css={() => `
                    display: flex;
                    justify-content: center;
                    margin: 1em auto;
                  `}
                    >
                      <Link to="/">Home</Link> &nbsp;|&nbsp;{' '}
                      <Link to="/listing">Listing</Link>
                    </div>
                  )
                }}
              />
              <Route
                path="/listing"
                exact={true}
                component={() => (
                  <div>
                    <Link to="/">Go To Home</Link>&nbsp;|&nbsp;{' '}
                    <Link to="/some-random-page">Non Existent</Link>
                    <Button
                      onClick={() => {
                        this.load('superman')
                      }}
                    >
                      Load
                    </Button>
                    <Button
                      onClick={() => {
                        this.cancel()
                      }}
                    >
                      Cancel
                    </Button>
                    <Listing entries={listing} />
                  </div>
                )}
              />
              <Route path="/listing/details/:id" component={EntryDetails} />
              <Route render={() => <h1>Sorry, this page does not exist</h1>}>
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
