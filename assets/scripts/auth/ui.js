'use strict'

const store = require('../store')

// $('#create-game').hide()
// $('#games-played').hide()
// $('.board').hide()

const signUpSuccess = function () {
    $('#message').text('You Created an Account!')

    $('form').trigger('reset')
}

const signUpFailure = function () {
    $('#message').text('Try a different Password!')
}

const signInSuccess = function (response) {
   store.user = response.user  
   $('#message').text('You Have Signed In! Welcome!')
   

    $('#authenticated').show()
    $('#unauthenticated').hide()

    // $('#create-game').show()
    // $('#games-played').show()
    // $('.board').hide()

    $('form').trigger('reset')
  }
  
  const signInFailure = function () {
    $('#message').text('Sign in Failed :(')

    $('form').trigger('reset')
  }
  

  const changePasswordSuccess = function () {
    $('#message').text('Your Password has Been Changed!')
    $('#authenticated').show()
    $('#unauthenticated').hide()

    $('form').trigger('reset')
  }
  
  const changePasswordFailure = function () {
    $('#message').text('Unable to Change Password :( ')

    $('form').trigger('reset')
  }
  
  const signOutSuccess = function () {
    $('#message').text('See You Soon!')
    $('#unauthenticated').show()
    $('#authenticated').hide()

    $('form').trigger('reset')
  
    // $('#create-game').hide()
    // $('#games-played').hide()
    // $('.board').hide()
    // change later in index
    store.user = null
  }
  
  const signOutFailure = function () {
    $('#message').text('Unable to Sign Out :(')
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