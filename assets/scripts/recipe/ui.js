'use strict'
// const showRecipeTemplate = require('../templates/recipe-listing.handlebars')
const store = require('../store')

const createRecipeSuccess = () => {
  // const showRecipeHtml = showRecipeTemplate({ recipe: responseData })
  // $('input').trigger('reset')
  $('form').trigger('reset')
  $('#message').text("Cocktail Created!")
}
const createRecipeFailure = function () {
  $('#message').text('Failed to upload your cocktail :(')
}


const indexRecipeSuccess = function (response) {
  console.log('ui recipe index works')
  store.recipe = response.recipe
  $('#all-recipes').text(JSON.stringify(response))
}

const indexRecipeFailure = function (error) {
  $('#message').text('Could not get your recipes')
}


// // const onIndexRecipeSuccess = (responseData) => {
// //   const showRecipeHtml = showRecipeTemplate({ recipe: sortedRecipe })
// //   $('form').trigger('reset')
// //   $('input').trigger('reset')
// //   $('#recipe-content').empty()
// //   $('#recipe-content').append(showRecipeHtml)
// //   $('#collapse-all-comments').attr('disabled', false)

// //   // view.showOwnership()
// //   // store.user ? $('.post-login').show() : $('.post-login').hide()
// //   // $('#user-message').text('Recipes are up to date')
// //   // setTimeout(() => $('#user-message').text(''), 3000)
// // }
// // const onShowRecipeSuccess = (responseData) => {
// //   const showRecipeHtml = showRecipeemplate({ recipe: responseData })
// //   $('form').trigger('reset')
// //   $('input').trigger('reset')
// //   $('#recipe-content').empty()
// //   $('#recipe-content').append(showRecipeHtml)
// // }
// // const onUpdateRecipeSuccess = (responseData, recipe, formData) => {
// //   $('input').trigger('reset')
// //   $('form').trigger('reset')

// //   // // remove class d-none to show
// //   // $(`#edit-recipe-${recipe}`).toggleClass('d-none')

// //   // // add class d-none to hide
// //   // $(`#recipe-owned-${recipe}`).toggleClass('d-none')

// //   // // right now theres not responseData to replace the current recipe with a handlebar
// //   // // work around: inject new data directly into html
// //   // // start work around
// //   // $(`#blog-title-${blog}`).text(formData.blog.title)
// //   // $(`#blog-body-${blog}`).text(formData.blog.body)

// //   // $(`#update-blog-textarea-title-${blog}`).text(formData.blog.title)
// //   // $(`#update-blog-textarea-body-${blog}`).text(formData.blog.body)

// //   // end work around

// //   $(`#recipe-title-${recipe}`).show()
// //   $(`#recipe-body-${recipe}`).show()
// // }
// // const onDeleteRecipeSuccess = id => {
// //   $('input').trigger('reset')
// //   $('form').trigger('reset')
// //   $(`#recipe-${id}`).hide()
// // }


// // const onRecipeFailure = (responseData) => {
// //   $('input').trigger('reset')
// //   $('form').trigger('reset')
// //   $('#user-message').text('Something went wrong with the recipe...')
// //   $('#failure-modal').modal('show')
// // }

module.exports = {
  indexRecipeSuccess,
  indexRecipeFailure,
  createRecipeSuccess,
  createRecipeFailure,
//   // onShowRecipeSuccess,
//   // onUpdateRecipeSuccess,
//   // onDeleteRecipeSuccess,
//   // onRecipeFailure
}