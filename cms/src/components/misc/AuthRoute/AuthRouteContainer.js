import React, { useEffect } from 'react'
import { getAuthToken } from '../../../helpers/auth'
import { useNavigate } from '@reach/router'

import AuthRoute from './AuthRoute'

const AuthRouteContainer = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    const token = getAuthToken()
    if (!token) { navigateTo('/') }

    // eslint-disable-next-line
  }, [])
  return (
    <AuthRoute />
  )
}

export default AuthRouteContainer
