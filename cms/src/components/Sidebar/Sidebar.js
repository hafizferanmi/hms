import React from 'react'
import List from '@material-ui/core/List'
import {
  Box,
  makeStyles
} from '@material-ui/core'
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Key as KeyIcon,
  Settings as SettingsIcon,
  Users as UsersIcon
} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import NavItem from './NavItem'

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    background: 'white',
    paddingLeft: '20px',
    paddingTop: '50px',
    height: '100vh'
  },
  listItem: {
    padding: '0 15px'
  }
}))

const routes = [
  { link: '/secure/admin/', label: 'Dashboard', icon: BarChartIcon },
  { link: '/secure/admin/rooms', label: 'Rooms', icon: LockIcon },
  { link: '/secure/admin/roomtypes', label: 'Room types', icon: SettingsIcon },
  { link: '/secure/admin/halls', label: 'Halls', icon: AlertCircleIcon },
  { link: '/secure/admin/staffs', label: 'Staffs', icon: UsersIcon },
  { link: '/secure/admin/checkin', label: 'Check In', icon: KeyIcon }
]

const Sidebar = () => {
  const classes = useStyles()

  const content = (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box p={2}>
        <List>
          {routes.map((item) => (
            <NavItem
              href={item.link}
              key={item.link}
              title={item.label}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  )

  return (
    <div className={classes.menuWrapper}>
      <PerfectScrollbar>
        {content}
      </PerfectScrollbar>
    </div>
  )
}

export default Sidebar
