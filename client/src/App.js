import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Pages from './pages'
import GlobalStyle from './components/GlobalStyle'

const uri = process.env.API_URI
const cache = new InMemoryCache()
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
})

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Pages />
  </ApolloProvider>
)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
