const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const port = process.env.PORT || 4000

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
}

async function startServer () {
  try {
    const app = express()
    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()
    server.applyMiddleware({ app, path: '/api' })

    app.listen({ port },
      () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
    )
  } catch (err) {
    console.error('Error', err)
  }
}

startServer()
