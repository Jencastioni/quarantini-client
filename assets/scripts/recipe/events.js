'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateRecipe = function (event) {
  event.preventDefault()
    const formData = getFormFields(event.target)
    api.createRecipe(formData)
      .then(ui.createRecipeSuccess)
      .catch(ui.createRecipeFailure)
}

const onIndexRecipe = function (event) {
   event.preventDefault()
   
   const usersRecipe = store.user.token
 
   api.indexRecipe(usersRecipe)
     .then(ui.indexRecipeSuccess)
     .catch(ui.indexRecipeFailure)
 }

 const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateRecipe(formData)
    .then(ui.onUpdateRecipeSuccess)
    .then(() => onIndexRecipe(event))
    .catch(ui.onUpdateRecipeFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  // const deleteRecipe = store.user.token
  const recipeId = $(event.target).closest('section').data('id')
  
  api.deleteRecipe(recipeId)
    
    .then(ui.onDeleteRecipeSuccess)
    .then(() => onIndexRecipe(event).$('#message').text('Your recipe was deleted!'))
    .catch(ui.onDeleteRecipeFailure)
    
}


module.exports = {
    onIndexRecipe,
    onCreateRecipe,
    onUpdateRecipe,
    onDeleteRecipe
}