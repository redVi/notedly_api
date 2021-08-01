const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.API_PORT || 3001
const db = require('./db')
const server = require('./server')

async function startServer () {
  try {
    const app = express()
    app.use(helmet()).use(cors()).disable('x-powered-by')

    db.connect()

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
