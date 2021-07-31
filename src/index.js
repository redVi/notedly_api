const express = require('express')
const port = process.env.PORT || 4000
const db = require('./db')
const server = require('./server')

async function startServer () {
  try {
    const app = express()
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
