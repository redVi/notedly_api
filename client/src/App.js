import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { typeDefs } from './gql/typeDefs'
import { isLoggedInVar } from './gql/cache'
import Pages from './pages'
import GlobalStyle from './components/GlobalStyle'

const uri = process.env.API_URI

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar()
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri,
  cache,
  headers: {
    authorization: localStorage.getItem('token') || ''
  },
  resolvers: {},
  typeDefs,
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
