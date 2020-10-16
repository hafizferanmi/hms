import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'
import RoomTypesPage from '../../RoomTypesPage'
import CheckInPage from '../../CheckInPage'

const AuthRoute = () => {
  return (
    <Router>
      <StaffsPage path='/staffs' />
      <RoomTypesPage path='/roomtypes' />
      <CheckInPage path='/checkin' />
    </Router>
  )
}

export default AuthRoute
