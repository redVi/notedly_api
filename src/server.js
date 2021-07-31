const { ApolloServer } = require('apollo-server-express')

const models = require('./models')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models }),
  formatError: (error) => ({
    message:
      error.extensions?.exception?.response?.message || error.message,
    code:
      error.extensions?.code || "SERVER_ERROR",
    name: error.extensions?.exception?.name || error.name,
  })
})

module.exports = server
