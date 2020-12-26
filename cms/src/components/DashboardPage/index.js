import React from 'react'
import ManagersLayout from '../ManagersPage/ManagersLayout'
import {
  Grid,
  makeStyles
} from '@material-ui/core'
import Budget from './Budget'
import TasksProgress from './TasksProgress'
import TotalCustomers from './TotalCustomers'
import TotalProfit from './TotalProfit'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  }
}))

const Dashboard = () => {
  const classes = useStyles()

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
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
          </Grid>
        </Grid>
      </div>
    </ManagersLayout>
  )
}

export default Dashboard
