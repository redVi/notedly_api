const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const port = process.env.PORT || 4000
const db = require('./db')

let notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
]

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String!
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    notes: () => notes,
    note: (parent, args) => notes.find(note => note.id === args.id)
  },
  Mutation: {
    newNote: (parent, args) => {
      const noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Adam Scott'
      }

      notes.push(noteValue)
      return noteValue
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
