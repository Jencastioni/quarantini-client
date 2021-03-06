'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const recipeEvents = require('./recipe/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  
  $('#create-cocktail').on('submit', recipeEvents.onCreateRecipe)
  $('#index').on('submit', recipeEvents.onIndexRecipe)

  $('#update-recipe').on('submit', recipeEvents.onUpdateRecipe)

  //Handlebars
  $('.all-recipes').on('click', '.delete-recipe', recipeEvents.onDeleteRecipe)
  $('.all-recipes').on('submit', '#update-recipe', recipeEvents.onUpdateRecipe)
})
