import React from 'react'
import {
  Grid,
  makeStyles
} from '@material-ui/core'
import Budget from './Budget'
import Sales from './Sales'
import TasksProgress from './TasksProgress'
import TotalCustomers from './TotalCustomers'
import TotalProfit from './TotalProfit'
import TrafficByDevice from './TrafficByDevice'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
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
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <Sales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <TrafficByDevice />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
