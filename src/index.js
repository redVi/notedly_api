const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const port = process.env.PORT || 4000

const db = require('./db')
const models = require('./models')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')

async function startServer () {
  try {
    const app = express()
    db.connect()

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => {
        return { models }
      }
    })

    await server.start()
    server.applyMiddleware({ app, path: '/api' })

    app.listen({ port },
      () => console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
      )
    )
  } catch (err) {
    console.error('Error', err)
  }
}

startServer()
