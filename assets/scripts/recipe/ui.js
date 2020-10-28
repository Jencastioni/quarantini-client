'use strict'
// const showRecipeTemplate = require('../templates/recipe-listing.handlebars')
const store = require('../store')
const showRecipeTemplate = require('../templates/recipe-listing.handlebars')

const createRecipeSuccess = () => {
  // const showRecipeHtml = showRecipeTemplate({ recipe: responseData })
  // $('input').trigger('reset')
  $('form').trigger('reset')
  $('#myModalMessage').modal('show')
  $('#message').text("Cocktail Created!")
  $('.all-recipes').hide() //index
  $('.update-button').show()
  $('#update-message').hide()
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
  
  $('.update-button').show()
  $('#update-message').hide()
 
  if (response.recipes.length === 0) {
    $('#myModalMessage').modal('show')
    $('#message').text('You need to create a cocktail first!')
  } else {
    $('#myModalMessage').modal('show')
    $('#message').text('Here are your cocktails!')
  }
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

const onUpdateRecipeSuccess = (recipeId) => {
  // $('input').trigger('reset')
  // $('#myModalMessage').modal('show')
  $('#update-message').show()
  $(`#updateModal-${recipeId}`).modal('hide')
  $('#update-message').text("Cocktail Updated!")
 
  $('.all-recipes').empty()
  $('.all-recipes').show()
  // $('.update-button').hide()
  $('#updateModal').modal('hide')
  $('form').trigger('reset')
  $('#myModalMessage').modal('hide')
  $('.modal-backdrop').remove()

}

const onUpdateRecipeFailure = () => {
  $('#update-message').show()
  $('#update-message').text("Your cocktail was not updated")
}


const onDeleteRecipeSuccess = () => {
  $('#myModalMessage').modal('show')
  $('#message').text('Your recipe was deleted!')
  $('#index').show()
  
  $('.all-recipes').empty()
}

const onDeleteRecipeFailure = () => {
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