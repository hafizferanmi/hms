import React, { useEffect } from 'react'
import { useNavigate, useParams } from '@reach/router'

import { resetPassword } from '../../../helpers/api'
import ResetPasswordForm from './ResetPasswordForm'
import useAsyncFn from '../../../hooks/useAsyncFn'

const ResetPasswordFormContainer = () => {
  const navigateTo = useNavigate()
  const { token } = useParams()

  if (!token) navigateTo('/')

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(resetPassword)

  const submitLoginForm = data => {
    data.token = token
    console.log(data)
    submitForm(data)
  }

  useEffect(() => {
    if (response) {
      navigateTo('/reset-password-success')
    }
    // eslint-disable-next-line
  }, [response])

  const serverState = {
    submitting,
    message: response && response.message,
    serverError
  }

  return (
    <ResetPasswordForm
      serverState={serverState}
      submitForm={submitLoginForm}
    />
  )
}

export default ResetPasswordFormContainer
