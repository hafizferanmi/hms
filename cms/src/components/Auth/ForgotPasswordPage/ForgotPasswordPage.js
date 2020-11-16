import React from 'react'
import AuthPageTemplate from '../AuthPageTemplate'
import ForgotPasswordForm from './ForgotPasswordFormContainer'

const ForgotPasswordPage = () => {
  return (
    <AuthPageTemplate
      bigHeader1='We are sorry!'
      bigHeader2='Just your email!'
      smallText='We will send you a mail that contains a token to reset your password. Wink'
    >
      <ForgotPasswordForm />
    </AuthPageTemplate>
  )
}

export default ForgotPasswordPage
