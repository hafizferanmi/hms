import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'

import { forgotPassword } from '../../../helpers/api'
import ForgotPasswordForm from './ForgotPasswordForm'
import useAsyncFn from '../../../hooks/useAsyncFn'

const ForgotPasswordFormContainer = () => {
  const navigateTo = useNavigate()

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(forgotPassword)

  const submitLoginForm = data => {
    submitForm(data)
  }

  useEffect(() => {
    if (response) {
      navigateTo('/forgot-password-success') // route to a new page
    }
    // eslint-disable-next-line
  }, [response])

  const serverState = {
    submitting,
    message: response && response.message,
    serverError
  }

  return (
    <ForgotPasswordForm
      serverState={serverState}
      submitForm={submitLoginForm}
    />
  )
}

export default ForgotPasswordFormContainer
