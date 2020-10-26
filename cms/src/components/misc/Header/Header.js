import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { Box, Badge, Hidden } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import User from '@material-ui/icons/SupervisedUserCircleOutlined'
import { makeStyles } from '@material-ui/core/styles'
import {
  Bell as BellIcon,
  User as UserIcon
} from 'react-feather'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white',
    outline: 'none',
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  desktopMenuButton: {
    marginRight: theme.spacing(1)
  },
  icons: {
    width: '20px'
  }
}))

const HeaderIcons = ({ classes }) => {
  return (
    <>
      <IconButton
        color='primary'
      >
        <Badge
          badgeContent='5'
          color='secondary'
          variant='dot'
        >
          <BellIcon className={classes.icons} />
        </Badge>
      </IconButton>
      <IconButton color='primary'>
        <NotificationsIcon />
      </IconButton>
      <IconButton color='primary'>
        <UserIcon />
      </IconButton>
      <IconButton color='primary'>
        <User />
      </IconButton>
    </>
  )
}

const Header = ({ handleDrawerToggle }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position='fixed' elevation={1} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} />
          {/* Icons on the header for desktop design */}
          <Hidden mdDown>
            <HeaderIcons classes={classes} />
          </Hidden>
          {/* Icons for mobile screens */}
          <Hidden lgUp>
            <HeaderIcons classes={classes} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
