import LoggedOutRoute from './LoggedOutRoute'
import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { getAuthToken } from '../../../helpers/auth'

const LoggedOutRouteContainer = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
    const token = getAuthToken()
    if (token) { navigateTo('/dashboard') }
    // eslint-disable-next-line
  }, [])

  return (
    <LoggedOutRoute />
  )
}

export default LoggedOutRouteContainer
