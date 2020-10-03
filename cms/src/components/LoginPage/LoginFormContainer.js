import React, { useEffect } from 'react'
import { staffLogin } from '../../helpers/api'
import { setAuthToken } from '../../helpers/auth'
import { useNavigate } from '@reach/router'
import Loginform from './Loginform'
import useAsyncFn from '../../hooks/useAsyncFn'

const LoginFormCantainer = () => {
  const navigateTo = useNavigate()

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(staffLogin)

  const submitLoginForm = data => {
    submitForm(data)
  }

  useEffect(() => {
    if (response && response.success) {
      const token = response.result
      setAuthToken(token)
      navigateTo('/secure')
    }
    // eslint-disable-next-line
  }, [response])

  return (
    <Loginform
      serverError={serverError}
      submitting={submitting}
      submitForm={submitLoginForm}
      message={response && response.message}
    />
  )
}

export default LoginFormCantainer
