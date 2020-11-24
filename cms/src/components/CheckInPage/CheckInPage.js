import React from 'react'
import PageLayout from '../ManagersPage/ManagersLayout'
import CheckInLists from './CheckInLists'
import CheckInDesc from './CheckInDesc'
import CheckInStats from './CheckInStats'
import { Grid } from '@material-ui/core'

const CheckInPage = ({ checkIns }) => {
  const [selectedCheckin, setSelectedCheckin] = React.useState()
  const handleSelectCheckIn = (checkIn) => setSelectedCheckin(checkIn)
  const clearSelectedCheckin = () => setSelectedCheckin()
  return (
    <PageLayout title='Check In'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} lg={2}>
          <CheckInStats />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <CheckInLists
            checkIns={checkIns}
            selectedCheckIn={selectedCheckin}
            handleSelectCheckIn={handleSelectCheckIn}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <CheckInDesc clearSelectedCheckin={clearSelectedCheckin} checkIn={selectedCheckin} />
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default CheckInPage
