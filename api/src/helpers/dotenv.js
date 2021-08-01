const path = require('path')
const env = require('dotenv').config({
  path: path.resolve(__dirname, '../../../.env')
})

module.exports = env
