require('dotenv').config()
const jwt = require('jsonwebtoken')
const depthLimit = require('graphql-depth-limit')
const { createComplexityLimitRule } = require('graphql-validation-complexity')
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

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
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
