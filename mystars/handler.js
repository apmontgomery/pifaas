'use strict'
const gpio = require('pigpio').Gpio

module.exports = async (event, context) => {

  const g = new gpio(10)
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"],
    'other': 'morerer',
    gpiovalue: g.digitalRead()
  }

  return context
    .status(200)
    .succeed(result)
}
