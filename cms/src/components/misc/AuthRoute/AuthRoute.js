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
import AdminLandingPage from '../../AdminLandingPage'
import CheckinFormPage from '../../CheckInFormPage'
import AccountPage from '../../AccountPage'
import SettingsPage from '../../SettingsPage'
import OnboardingPage from '../../OnboardingPage'
import LaunchPadPage from '../../LaunchPadPage'

const AuthRoute = () => {
  return (
    <Router>
      <AdminLandingPage path='/' />
      <FrontDeskPage path='/frontdesk' />
      <ManagersPage path='admin'>
        <DashboardPage path='/' />
        <OnboardingPage path='/onboarding' />
        <LaunchPadPage path='/launchpad' />
        <StaffsPage path='/staffs' />
        <RoomsPage path='/rooms' />
        <RoomTypesPage path='/roomtypes' />
        <CheckInPage path='/guest' />
        <HallsPage path='/halls' />
        <CheckinFormPage path='/checkin/*' />
        <AccountPage path='/profile' />
        <SettingsPage path='/settings' />
      </ManagersPage>
    </Router>
  )
}

export default AuthRoute
