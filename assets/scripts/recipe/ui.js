'use strict'
// const showRecipeTemplate = require('../templates/recipe-listing.handlebars')
const store = require('../store')
const showRecipeTemplate = require('../templates/recipe-listing.handlebars')

const createRecipeSuccess = () => {
  // const showRecipeHtml = showRecipeTemplate({ recipe: responseData })
  // $('input').trigger('reset')
  $('form').trigger('reset')
  $('#message').text("Cocktail Created!")
  $('.all-recipes').hide() //index
}
const createRecipeFailure = function () {
  $('#message').text('Failed to upload your cocktail :(')
}


const indexRecipeSuccess = function (response) {
  store.recipe = response.recipe
  const showRecipeHTML = showRecipeTemplate({recipes: response.recipes})
  $('.all-recipes').empty()
  $('.all-recipes').show()
  $('.all-recipes').append(showRecipeHTML)
  // $('#index').hide()
  $('#message').text('Here are your cocktails!')
  
  
}

const indexRecipeFailure = function () {
  $('#message').text('Could not get your recipes')
}



// const onShowRecipeSuccess = (response) => {
//   store.recipe = response.recipe
//   const showRecipeHTML = showRecipeTemplate({recipes: response.recipes})
//   $('form').trigger('reset')
//   $('input').trigger('reset')
//   $('#recipe-content').empty()
//   $('#recipe-content').append(showRecipeHtml)
// }

const onUpdateRecipeSuccess = () => {
  // $('.all-recipes').hide() 
  // $('input').trigger('reset')
  $('#message').text("Cocktail Updated!")
  $('form').trigger('reset')
  $('.all-recipes').hide()
  $('.all-recipes').empty()
}

const onUpdateRecipeFailure = () => {
  console.log("Updated ui fail")
  $('#message').text('Your cocktail was not updated ;(')
}


const onDeleteRecipeSuccess = () => {
  $('#message').text('Your recipe was deleted!')
  $('#index').show()
  
  $('.all-recipes').empty()
}

const onDeleteRecipeFailure = () => {
  console.log("deleted ui fail")
  $('#message').text('Your recipe was not deleted ;(')
}


module.exports = {
  indexRecipeSuccess,
  indexRecipeFailure,
  createRecipeSuccess,
  createRecipeFailure,
  // onShowRecipeSuccess,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onDeleteRecipeSuccess,
  onDeleteRecipeFailure
}