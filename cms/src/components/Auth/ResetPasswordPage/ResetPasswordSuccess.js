import React from 'react'
import AuthPageTemplate from '../AuthPageTemplate'

const ResetPasswordSuccess = () => {
  return (
    <AuthPageTemplate
      bigHeader1='Changed!'
      bigHeader2='You can now login with your new password!'
      smallText='Wow. we are happy you can now login to the app with your new password.'
    />
  )
}

export default ResetPasswordSuccess
