import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'

const AuthRoute = () => {
  return (
    <Router>
      <StaffsPage path='/' />
    </Router>
  )
}

export default AuthRoute
