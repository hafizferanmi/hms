import React, { useEffect } from 'react'
import { getAuthToken } from '../../../helpers/auth'
import { useNavigate, Router } from '@reach/router'
import Dashboard from '../../Dashboard'

const AuthRoute = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    const token = getAuthToken()
    if (!token) { navigateTo('/') }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Router>
        <Dashboard path='/' />
      </Router>
    </>
  )
}

export default AuthRoute
