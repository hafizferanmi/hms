import React from 'react'
import { Router } from '@reach/router'
import LoginPage from '../../Auth/LoginPage'
import ForgotPasswordPage from '../../Auth/ForgotPasswordPage'
import ResetPasswordPage from '../../Auth/ResetPasswordPage'
import ForgotPasswordSuccess from '../../Auth/ForgotPasswordPage/ForgotPasswordSuccess'

const NotFoundPage = () => {
  return (
    <div>
      We cant find what you are looking for. Go back to home page
    </div>
  )
}

const LoggedOutRoute = () => {
  return (
    <Router>
      <LoginPage path='/' />
      <ForgotPasswordPage path='/forgot-password' />
      <ForgotPasswordSuccess path='/forgot-password-success' />
      <ResetPasswordPage path='/reset-password' />
      <NotFoundPage default />
    </Router>
  )
}

export default LoggedOutRoute
