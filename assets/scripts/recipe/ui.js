'use strict'
const showRecipeTemplate = require('../templates/recipe-listing.handlebars')
const store = require('../store')
const view = require('../view/view')


const onCreateRecipeSuccess = (responseData) => {
  const showRecipeHtml = showRecipeTemplate({ recipe: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#recipe-content').empty()
  $('#recipe-content').append(showRecipeHtml)
  $('#create-recipe-modal').modal('hide')
}

const onIndexRecipeSuccess = (responseData) => {
  const showRecipeHtml = showRecipeTemplate({ recipe: sortedRecipe })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#recipe-content').empty()
  $('#recipe-content').append(showRecipeHtml)
  $('#collapse-all-comments').attr('disabled', false)

  view.showOwnership()
  store.user ? $('.post-login').show() : $('.post-login').hide()
  $('#user-message').text('Recipes are up to date')
  setTimeout(() => $('#user-message').text(''), 3000)
}
const onShowRecipeSuccess = (responseData) => {
  const showRecipeHtml = showRecipeemplate({ recipe: responseData })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#recipe-content').empty()
  $('#recipe-content').append(showRecipeHtml)
}
const onUpdateRecipeSuccess = (responseData, recipe, formData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')

  // remove class d-none to show
  $(`#edit-recipe-${recipe}`).toggleClass('d-none')

  // add class d-none to hide
  $(`#recipe-owned-${recipe}`).toggleClass('d-none')

  // right now theres not responseData to replace the current recipe with a handlebar
  // work around: inject new data directly into html
  // start work around
  $(`#blog-title-${blog}`).text(formData.blog.title)
  $(`#blog-body-${blog}`).text(formData.blog.body)

  $(`#update-blog-textarea-title-${blog}`).text(formData.blog.title)
  $(`#update-blog-textarea-body-${blog}`).text(formData.blog.body)

  // end work around

  $(`#recipe-title-${recipe}`).show()
  $(`#recipe-body-${recipe}`).show()
}
const onDeleteRecipeSuccess = id => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $(`#recipe-${id}`).hide()
}


const onRecipeFailure = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('Something went wrong with the recipe...')
  $('#failure-modal').modal('show')
}

module.exports = {
  onIndexRecipeSuccess,
  onCreateRecipeSuccess,
  onShowRecipeSuccess,
  onUpdateRecipeSuccess,
  onDeleteRecipeSuccess,
  onRecipeFailure
}