const path = require('path')
const env = require('dotenv').config({
  path: path.resolve(__dirname, '../../../.env')
})

console.log('some', process.env.DB_USERNAME)

module.exports = env
