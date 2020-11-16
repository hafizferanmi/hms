import React from 'react'
import AuthPageTemplate from '../AuthPageTemplate'

const ForgotPasswordSuccess = () => {
  return (
    <AuthPageTemplate
      bigHeader1='Done!'
      bigHeader2='Check your inbox!'
      smallText='We send a mail containing a password reset link to you. Check your inbox to change your password.'
    />
  )
}

export default ForgotPasswordSuccess
