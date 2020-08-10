'use strict'

const store = require('../store')

$('.recipe-buttons').hide()
$('.big-heading').hide()
$('#sign-out-message').hide()

const signUpSuccess = function () {
    $('#sign-out-message').text('You Created an Account!')
    $('#sign-out-message').show()
    $('form').trigger('reset')
    // $('.big-heading').show()
  
}

const signUpFailure = function () {
    $('#sign-out-message').text('Try a different Password!')
    $('#sign-out-message').show()
    $('form').trigger('reset')
}

const signInSuccess = function (response) {
   store.user = response.user  
  
   $('#myModalAbout').modal('show')
  //  $('#login-message').text('You Have Signed In! Welcome!')
   $('#sign-out-message').hide()

    $('#authenticated').show()
    $('#unauthenticated').hide()
    $('#age').hide()
    $('.recipe-buttons').show()

    $('.big-heading').show()
    $('form').trigger('reset')
    $('#gif').hide()
    $('.update-button').show()
  }
  
  const signInFailure = function () {
    $('#sign-out-message').text('Sign in Failed :(')
    $('#sign-out-message').show()
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
    $('#sign-out-message').text('Be Safe Out There!')
    $('#sign-out-message').show()
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