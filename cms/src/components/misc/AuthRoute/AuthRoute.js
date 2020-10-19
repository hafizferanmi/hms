import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'
import RoomTypesPage from '../../RoomTypesPage'
import CheckInPage from '../../CheckInPage'
import ManagersPage from '../../ManagersPage'
import DashboardPage from '../../DashboardPage'
import HallsPage from '../../HallsPage'

const AuthRoute = () => {
  return (
    <Router>
      <ManagersPage path='admin'>
        <DashboardPage path='/' />
        <StaffsPage path='/staffs' />
        <RoomTypesPage path='/roomtypes' />
        <CheckInPage path='/checkin' />
        <HallsPage path='/halls' />
      </ManagersPage>
    </Router>
  )
}

export default AuthRoute
