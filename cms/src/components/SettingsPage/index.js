import React from 'react'
import {
  Box,
  Container
} from '@material-ui/core'
import Notifications from './Notifications'
import Password from './Password'
import ManagersLayout from '../ManagersPage/ManagersLayout'

const SettingsView = () => {

  return (
    <ManagersLayout
      title='Settings'
    >
      <Container maxWidth='lg'>
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </ManagersLayout>
  )
}

export default SettingsView
