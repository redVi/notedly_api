require('dotenv').config()
const jwt = require('jsonwebtoken')
const { ApolloServer } = require('apollo-server-express')

const models = require('./models')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')

const getUser = token => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      new Error('Session invalid')
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization
    const user = getUser(token)
    return { models, user }
  },
  formatError: error => ({
    message:
      error.extensions?.exception?.response?.message || error.message,
    code:
      error.extensions?.code || "SERVER_ERROR",
    name: error.extensions?.exception?.name || error.name,
  })
})

module.exports = server
