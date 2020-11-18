import React from 'react'
import Header from './Header'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 40
  }
})

const ManagersLayout = ({ title, children }) => {
  const classes = useStyles()
  return (
    <>
      <Header title={title} />
      <div className={classes.root}>
        {children}
      </div>

    </>
  )
}

export default ManagersLayout
