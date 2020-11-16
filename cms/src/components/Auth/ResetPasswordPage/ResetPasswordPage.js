import React from 'react'
import AuthPageTemplate from '../AuthPageTemplate'
import ResetPasswordForm from './ResetPasswordFormContainer'

const ResetPasswordPage = () => {
  return (
    <AuthPageTemplate
      bigHeader1='Almost done!'
      bigHeader2='Set a new password!'
      smallText='Just a second and we done with resetting your password. Wink'
    >
      <ResetPasswordForm />
    </AuthPageTemplate>
  )
}

export default ResetPasswordPage
