import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'
import RoomTypesPage from '../../RoomTypesPage'
import CheckInPage from '../../CheckInPage'
import ManagersPage from '../../ManagersPage'
import DashboardPage from '../../DashboardPage'

const AuthRoute = () => {
  return (
    <Router>
      <ManagersPage path='admin'>
        <DashboardPage path='/' />
        <StaffsPage path='/staffs' />
        <RoomTypesPage path='/roomtypes' />
        <CheckInPage path='/checkin' />
      </ManagersPage>
    </Router>
  )
}

export default AuthRoute
