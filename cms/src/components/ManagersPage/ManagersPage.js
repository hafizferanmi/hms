import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from '../Sidebar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  aside: {
    background: 'white',
    flexBasis: drawerWidth
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    background: '#f4f8fc',
    padding: 40
  }
}))

const ManagersPage = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <aside className={classes.aside}>
          <Sidebar />
        </aside>
        <main className={classes.content}>
          <div className={classes.contentWrapper}>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default ManagersPage
