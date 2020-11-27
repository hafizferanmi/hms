import React from 'react'
import PageLayout from '../ManagersPage/ManagersLayout'
import CheckInLists from './CheckInLists'
import CheckInDesc from './CheckInDesc'
import { Grid } from '@material-ui/core'

const CheckInPage = ({ checkIns, removeDateFilter }) => {
  const [selectedCheckin, setSelectedCheckin] = React.useState()
  const handleSelectCheckIn = (checkIn) => setSelectedCheckin(checkIn)
  const clearSelectedCheckin = () => setSelectedCheckin()
  return (
    <PageLayout title='Check In'>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={2} lg={1}>
          <CheckInStats />
        </Grid> */}
        <Grid item xs={12} md={6} lg={4}>
          <CheckInLists
            checkIns={checkIns}
            selectedCheckIn={selectedCheckin}
            handleSelectCheckIn={handleSelectCheckIn}
            removeDateFilter={removeDateFilter}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <CheckInDesc clearSelectedCheckin={clearSelectedCheckin} checkIn={selectedCheckin} />
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default CheckInPage
