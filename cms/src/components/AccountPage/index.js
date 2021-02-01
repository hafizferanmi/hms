import React from 'react'
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core'
import Profile from './Profile'
import ManagersLayout from '../ManagersPage/ManagersLayout'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Account = () => {
  const classes = useStyles()

  return (
    <ManagersLayout
      className={classes.root}
      title='Account'
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid>
        </Grid>
      </Container>
    </ManagersLayout>
  )
}

export default Account
