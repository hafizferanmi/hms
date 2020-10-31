import React from 'react'
import { Router } from '@reach/router'
import StaffsPage from '../../StaffsPage'
import RoomTypesPage from '../../RoomTypesPage'
import CheckInPage from '../../CheckInPage'
import ManagersPage from '../../ManagersPage'
import DashboardPage from '../../DashboardPage'
import HallsPage from '../../HallsPage'
import RoomsPage from '../../RoomsPage'
import FrontDeskPage from '../../FrontDeskPage'

const AuthRoute = () => {
  return (
    <Router>
      <FrontDeskPage path='/frontdesk' />
      <ManagersPage path='admin'>
        <DashboardPage path='/' />
        <StaffsPage path='/staffs' />
        <RoomsPage path='/rooms' />
        <RoomTypesPage path='/roomtypes' />
        <CheckInPage path='/checkin' />
        <HallsPage path='/halls' />
      </ManagersPage>
    </Router>
  )
}

export default AuthRoute
