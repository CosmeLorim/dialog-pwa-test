import React from 'react'
import clientApollo from './lib/apollo'
import { ApolloProvider } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import GlobalStyle from './global'
import Home from './pages/home/'

function App() {

  return (
    <ApolloProvider client={clientApollo({})}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
