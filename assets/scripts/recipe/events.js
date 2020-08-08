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
   console.log(event)
   
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
    // .then(function () {
    //   onIndexRecipe(event)
    // })
    .catch(ui.onUpdateRecipeFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  console.log('this is the event', event)
  // const deletedWhiskey = store.user.token
  const recipeId = $(event.target).closest('section').data('id')
  console.log('recipe id=', recipeId)

  api.deleteRecipe(recipeId)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onDeleteRecipeFailure)
    
}


module.exports = {
    onIndexRecipe,
    onCreateRecipe,
    onUpdateRecipe,
    onDeleteRecipe
}