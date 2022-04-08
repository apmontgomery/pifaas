'use strict'
const gpio = require('rpi-gpio').promise

module.exports = async (event, context) => {
  let error = 'none'
  let gpiovalue = 'none'
  try {
    await gpio.setup(7, gpio.DIR_IN)
    gpiovalue = await gpio.read(7)
  } catch (err) {
    error = err
  }

  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"],
    'other': 'morer',
    error,
    gpiovalue
  }

  return context
    .status(200)
    .succeed(result)
}
