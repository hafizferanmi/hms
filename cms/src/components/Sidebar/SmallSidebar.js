import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  sidebarWrapper: {
    width: 30,
    background: 'lightBlue',
    padding: 5,
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%'
  }
})

const SmallSidebar = () => {
  const classes = useStyles()
  return (
    <div className={classes.sidebarWrapper}>
      Hi
    </div>
  )
}

export default SmallSidebar
