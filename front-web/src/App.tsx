import React, { useState, useEffect } from 'react'
import getApolloClient from './lib/apollo'
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import GlobalStyle from './global'
import Home from './pages/home/'
import FriendDetails from './pages/friendDetails'

function App() {
  const [client, setClient]: [
    ApolloClient<NormalizedCacheObject> | null,
    Function,
  ] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client)
      setLoading(false)
    })
  }, [])

  if (loading || client === null) {
    return (
      <p>Iniciando</p>
    )
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path='/:id'>
              <FriendDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
