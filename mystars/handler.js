'use strict'
const fs = require('fs')

module.exports = async (event, context) => {

  const sy = fs.readdirSync('/sys/class/gpio')
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"],
    'other': 'morerer',
    sy
  }

  return context
    .status(200)
    .succeed(result)
}
