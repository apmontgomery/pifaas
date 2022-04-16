'use strict'
const fs = require('fs')
const os = require('os')
const userInfo = os.userInfo()

module.exports = async (event, context) => {

  let sy
  try {
    sy = fs.readdirSync('/sys/class/gpio')
  } catch (error) {
      sy = error
  }
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"],
    'other': 'morerer',
    sy,
    userInfo
  }

  return context
    .status(200)
    .succeed(result)
}
