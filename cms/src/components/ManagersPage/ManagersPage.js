import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import Header from '../misc/Header'
import Navbar from '../misc/Navbar'

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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    height: '100vh'
  },
  contentTopDesign: {
    height: '300px',
    backgroundColor: blue[500]
  },
  contentWrapper: {
    margin: theme.spacing(-30, 3)
  }
}))

const ManagersPage = (props) => {
  const { window, children } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawerToggle={handleDrawerToggle}
      />
      <Navbar
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.contentTopDesign} />
        <div className={classes.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default ManagersPage
