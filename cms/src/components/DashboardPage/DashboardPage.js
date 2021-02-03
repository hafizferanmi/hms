import React from 'react'
import ManagersLayout from '../ManagersPage/ManagersLayout'
import {
  Grid,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  statWrapper: {
    minHeight: '100%',
    marginTop: 20,
    marginRight: 5,
    borderRadius: 5,
    background: 'white',
    border: '1px solid lightblue'
  },
  statLabel: {
    fontSize: 18
  },
  statValue: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold'
  }
}))

const Dashboard = ({ analytics }) => {
  const classes = useStyles()
  const { guests, halls, roomTypes, rooms } = analytics

  const data = [
    { label: 'Number of rooms', count: rooms },
    { label: 'Number of halls', count: halls },
    { label: 'Number of room types', count: roomTypes },
    { label: 'Number of guests', count: guests }
  ]

  return (
    <ManagersLayout title='Reports'>
      <div
        className={classes.root}
        title='Dashboard'
      >
        <Grid
          container
          spacing={3}
        >
          {
            data.map(data => (
              <Grid
                className={classes.statWrapper}
                key={data.label}
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <div className={classes.statLabel}>{data.label}</div>
                <p className={classes.statValue}>{data.count}</p>
              </Grid>
            ))
          }

        </Grid>
      </div>
    </ManagersLayout>
  )
}

export default Dashboard
