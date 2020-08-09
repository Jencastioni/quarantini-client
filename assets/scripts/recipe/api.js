  
'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createRecipe = (formData) => {
  const recipe = formData
  return $.ajax({
     headers: {
       Authorization: 'Bearer ' + store.user.token
     },
    url: config.apiUrl + '/recipe',
    method: 'POST',
    data: {recipe} 
  })
}


const indexRecipe = function () {
   return $.ajax({
     headers: {
       Authorization: 'Bearer ' + store.user.token
     },
     url: config.apiUrl + '/recipe',
     method: 'GET',
     data: {
      user: store.user.id
     }
   })
 }


const showRecipe = (formData) => {
  const thisRecipeId = formData
  return $.ajax({
  headers: {
    Authorization: 'Bearer ' + store.user.token
  },
    url: config.apiUrl + '/recipe/' + thisRecipeId,
    method: 'GET',
    data: formData
  })
}

const updateRecipe = (formData) => {
  const updatedRecipeId = formData.recipe.id
  return $.ajax({
    url: config.apiUrl + '/recipe/' + updatedRecipeId,
    method: 'PATCH',
    headers: { 
      Authorization: 'Bearer ' + store.user.token 
    },
    data: formData
  })
}

const deleteRecipe = recipeId => {
  return $.ajax({
    url: config.apiUrl + '/recipe/' + recipeId,
    method: 'DELETE',
    headers: { 
      Authorization: 'Bearer ' + store.user.token 
    }
  })
}



module.exports = {
  createRecipe,
  indexRecipe,
  showRecipe,
  updateRecipe,
  deleteRecipe,
}