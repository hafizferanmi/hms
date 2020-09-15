import React, { useEffect } from 'react'
import { getAuthToken } from '../../../helpers/auth'
import { Router, useNavigate } from '@reach/router'
import ManagersPage from '../../ManagersPage'

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
        <ManagersPage path='/' />
      </Router>
    </>
  )
}

export default AuthRoute
