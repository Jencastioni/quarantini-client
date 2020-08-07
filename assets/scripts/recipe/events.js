'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateRecipe = function (event) {
  event.preventDefault()
    const formData = getFormFields(event.target)
    api.createRecipe(formData)
      .then(ui.createRecipeSuccess)
      .catch(ui.createRecipeFailure)
}

const onIndexRecipe = function (event) {
  console.log('here is recipe index')
   event.preventDefault()
   const usersRecipe = store.user.token
 
   api.indexRecipe(usersRecipe)
     .then(ui.indexRecipeSuccess)
     .catch(ui.indexRecipeFailure)
 }



// // const onRecipeCrud = {
// //   create: function (event) {
// //     event.preventDefault()
// //     const formData = getFormFields(event.target)
// //     api.createRecipe(formData)
// //       .then(ui.onCreateRecipeSuccess)
// //       .then(this.index)
// //       .catch(ui.onRecipeFailure)
// //   },
// //   index: function (event) {
// //     if (event) { event.preventDefault() }
// //     api.indexRecipe()
// //       .then(ui.onIndexRecipeSuccess)
// //       .catch(ui.onRecipeFailure)
// //   },
// //   show: function (event) {
// //     if (event) { event.preventDefault() }
// //     const formData = getFormFields(event.target)
// //     api.showRecipe(formData)
// //       .then(ui.onShowRecipeSuccess)
// //       .catch(ui.onRecipeFailure)
// //   },
// //   update: function (event) {
// //     event.preventDefault()
// //     const recipeId = $(event.target).data('recipe-id')
// //     const formData = getFormFields(event.target)
// //     api.updateRecipe(formData, recipeId)
// //       .then(data => ui.onUpdateRecipeSuccess(data, recipeId, formData))
// //       .catch(ui.onRecipeFailure)
// //   },
// //   delete: function (event) {
// //     event.preventDefault()
// //     const id = $(event.target).data('recipe-id')
// //     api.deleteRecipe(id)
// //       .then(() => ui.onDeleteRecipeSuccess(id))
// //       .catch(ui.onRecipeFailure)
// //   }
// // }

module.exports = {
    onIndexRecipe,
    onCreateRecipe
}