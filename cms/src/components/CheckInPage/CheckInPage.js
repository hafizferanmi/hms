import React from 'react'
import PageLayout from '../ManagersPage/ManagersLayout'
import CheckInLists from './CheckInLists'
import CheckInDesc from './CheckInDesc'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  gridLayout: {
    // background: 'yellow'
  },
  statGrid: {
    // background: 'red'
  },
  checkInListGrid: {
    // background: 'pink'
  },
  descGrid: {
    // background: 'blue'
  }
})

const CheckInPage = ({ checkIns }) => {
  const classes = useStyles()
  const [selectedCheckin, setSelectedCheckin] = React.useState()
  const handleSelectCheckIn = (checkIn) => setSelectedCheckin(checkIn)
  return (
    <PageLayout title='Check In'>
      <Grid container spacing={2}>
        <Grid item className={classes.statGrid} xs={12} md={2} lg={2}>
          This is the statgrid
        </Grid>
        <Grid item className={classes.checkInListGrid} xs={12} md={6} lg={3}>
          <CheckInLists
            checkIns={checkIns}
            handleSelectCheckIn={handleSelectCheckIn}
          />
        </Grid>
        <Grid item className={classes.descGrid} xs={12} md={6} lg={7}>
          <CheckInDesc checkIn={selectedCheckin} />
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default CheckInPage
