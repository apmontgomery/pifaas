'use strict'
const gpio = require('onoff').Gpio

module.exports = async (event, context) => {

  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"],
    'other': 'morer',
    gpiovalue: gpio.accessible
  }

  return context
    .status(200)
    .succeed(result)
}
