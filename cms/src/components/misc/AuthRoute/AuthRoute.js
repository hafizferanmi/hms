import React, { useEffect } from 'react'
// import { getAuthToken } from '../../../helpers/auth'
import { Router } from '@reach/router'
import FrontDeskPage from '../../FrontDeskPage'
import Header from '../Header'

const AuthRoute = () => {
  // const navigateTo = useNavigate()
  useEffect(() => {
    // const token = getAuthToken()
    // if (!token) { navigateTo('/') }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Router>
        <FrontDeskPage path='/' />
      </Router>
    </>
  )
}

export default AuthRoute
