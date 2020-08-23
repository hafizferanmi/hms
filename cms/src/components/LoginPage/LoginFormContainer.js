import React, { useEffect } from 'react'
import { staffLogin } from '../../helpers/api'
import { setAuthToken } from '../../helpers/auth'
import { useNavigate } from '@reach/router'
import Loginform from './Loginform'
import useAsyncFn from '../../hooks/useAsyncFn'

const LoginFormCantainer = () => {
  const navigateTo = useNavigate()
  const { error, loading, data, executeFn: submitForm } = useAsyncFn(staffLogin)
  const submitLoginForm = data => {
    submitForm()
  }

  useEffect(() => {
    if (data && data.success) {
      setAuthToken(data.token)
      navigateTo('/secure')
    }
    // eslint-disable-next-line
  }, [data])

  return (
    <Loginform
      error={error}
      loading={loading}
      submitForm={submitLoginForm}
      message={data && data.message}
    />
  )
}

export default LoginFormCantainer
