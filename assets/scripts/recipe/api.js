  
'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createRecipe = (formData) => {
  const recipe = formData.recipe
  return $.ajax({
    url: config.apiUrl + '/recipe',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {recipe}
  })
}

const indexRecipe = () => {
  return $.ajax({
    url: config.apiUrl + '/recipe',
    method: 'GET'
  })
}

const indexMyRecipe = () => {
  return $.ajax({
    url: config.apiUrl + '/my-recipe',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const showRecipe = (formData) => {
  const id = formData.recipe.id
  return $.ajax({
    url: config.apiUrl + `/recipe/${id}`,
    method: 'GET'
  })
}

const updateRecipe = (formData, id) => {
  return $.ajax({
    url: config.apiUrl + `/recipe/${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
        recipe: {
            title: formData.recipe.title,
            body: formData.recipe.body
      }}
  })
}

const deleteRecipe = id => {
  return $.ajax({
    url: config.apiUrl + `/recipe/${id}`,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}



module.exports = {
  createRecipe,
  indexRecipe,
  showRecipe,
  updateRecipe,
  deleteRecipe,
  indexMyRecipe
}