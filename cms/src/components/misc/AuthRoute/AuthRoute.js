import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'
import RoomTypesPage from '../../RoomTypesPage'

const AuthRoute = () => {
  return (
    <Router>
      <StaffsPage path='/staffs' />
      <RoomTypesPage path='/roomtypes' />
    </Router>
  )
}

export default AuthRoute
