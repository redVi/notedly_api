const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const port = process.env.PORT || 4000
const db = require('./db')
const models = require('./models')

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    createNote(content: String!): Note!
  }
`

const resolvers = {
  Query: {
    notes: async () => await models.Note.find(),
    note: async (parent, args) => await models.Note.findById(args.id)
  },
  Mutation: {
    createNote: async (parent, args) => {
      return await models.Note.create({
        content: args.content,
        author: 'Adam Scott'
      })
    }
  }
}

async function startServer () {
  try {
    const app = express()
    db.connect()

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
