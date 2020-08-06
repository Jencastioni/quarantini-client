'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const recipeEvents = require('./recipe/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  recipeEvents.addHandlers()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
