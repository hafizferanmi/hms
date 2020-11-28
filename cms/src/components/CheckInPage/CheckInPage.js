import React from 'react'
import PageLayout from '../ManagersPage/ManagersLayout'
import CheckInLists from './CheckInLists'
import CheckInDesc from './CheckInDesc'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  pageWrapper: {
    // minHeight: 100,
    // height: 200,
    // maxHeight: 300,
    // overflow: 'auto'
  }
})

const CheckInPage = ({ checkIns, removeDateFilter }) => {
  const [selectedCheckin, setSelectedCheckin] = React.useState()
  const handleSelectCheckIn = (checkIn) => setSelectedCheckin(checkIn)
  const clearSelectedCheckin = () => setSelectedCheckin()
  const classes = useStyles()
  return (
    <PageLayout title='Check In'>
      <Box className={classes.pageWrapper}>
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
      </Box>
    </PageLayout>
  )
}

export default CheckInPage
