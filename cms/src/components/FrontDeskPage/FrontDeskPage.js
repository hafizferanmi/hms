import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  frontDeskPageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const FrontDeskPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.frontDeskPageWrapper}>
      <div>This is our front desk page. The design is coming soon on its way. Wink wink.</div>
    </div>
  )
}

export default FrontDeskPage
