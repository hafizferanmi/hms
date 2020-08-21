import React from 'react'
import { Router } from '@reach/router'
import LoginPage from '../../LoginPage'

const LoggedOutRoute = () => {
  return (
    <Router>
      <LoginPage path='/' />
    </Router>
  )
}

export default LoggedOutRoute
