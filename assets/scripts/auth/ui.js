'use strict'

const store = require('../store')

$('.recipe-buttons').hide()
$('.big-heading').hide()

const signUpSuccess = function () {
    $('#login-message').text('You Created an Account!')
    $('#sign-out-message').hide()
    $('form').trigger('reset')
}

const signUpFailure = function () {
    $('#login-message').text('Try a different Password!')
}

const signInSuccess = function (response) {
   store.user = response.user  
   $('#login-message').text('You Have Signed In! Welcome!')
   

    $('#authenticated').show()
    $('#unauthenticated').hide()
    $('#age').hide()
    $('.recipe-buttons').show()
    $('.big-heading').show()
    $('form').trigger('reset')
    $('#gif').hide()
  }
  
  const signInFailure = function () {
    $('#login-message').text('Sign in Failed :(')

    $('form').trigger('reset')
  }
  

  const changePasswordSuccess = function () {
    $('#login-message').text('Your Password has Been Changed!')
    $('#authenticated').show()
    $('#unauthenticated').hide()

    $('form').trigger('reset')
  }
  
  const changePasswordFailure = function () {
    $('#login-message').text('Unable to Change Password :( ')

    $('form').trigger('reset')
  }
  
  const signOutSuccess = function () {
    $('#sign-out-message').text('Come Back Soon!')
    $('#unauthenticated').show()
    $('#authenticated').hide()

    $('form').trigger('reset')
  
    $('.recipe-buttons').hide()
    $('.big-heading').hide()
    $('#age').show()
    $('#gif').show()
    store.user = null
  }
  
  const signOutFailure = function () {
    $('login-#message').text('Unable to Sign Out :(')
  }
  
  module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordFailure,
    changePasswordSuccess,
    signOutSuccess,
    signOutFailure
  }