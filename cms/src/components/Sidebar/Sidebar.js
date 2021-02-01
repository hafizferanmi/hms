import React from 'react'
import {
  Box,
  makeStyles
} from '@material-ui/core'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import GridOnIcon from '@material-ui/icons/GridOn'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import FaceIcon from '@material-ui/icons/Face'
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded'
import PerfectScrollbar from 'react-perfect-scrollbar'
import NavItem from './NavItem'
// import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined'
// import HomeWorkIcon from '@material-ui/icons/HomeWork'

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    height: '100%',
    paddingTop: 40,
    paddingLeft: 25
  },
  logoImg: {
    width: 150,
    height: 40
  }
}))

const routes = [
  // { link: '/secure/admin/launchpad', label: 'Launchpad', icon: ShowChartIcon },
  { link: '/secure/admin/', label: 'Reports', icon: ShowChartIcon },
  { link: '/secure/admin/guest', label: 'Guests', icon: SubjectRoundedIcon },
  { link: '/secure/admin/rooms', label: 'Rooms', icon: GridOnIcon },
  // { link: '/secure/admin/checkin', label: 'Bookings', icon: MenuBookOutlinedIcon },
  // { link: '/secure/admin/halls', label: 'Halls', icon: HomeWorkIcon },
  // { link: '/secure/admin/mails-and-sms', label: 'Mails & SMS', icon: HomeWorkIcon },
  { link: '/secure/admin/staffs', label: 'Staffs', icon: FaceIcon },
  { link: '/secure/admin/settings', label: 'Settings', icon: SettingsOutlinedIcon }
]

const Sidebar = () => {
  const classes = useStyles()

  const content = (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box
        display='flex'
        flexDirection='column'
      >
        {routes.map((item) => (
          <NavItem
            href={item.link}
            key={item.link}
            title={item.label}
            icon={item.icon}
          />
        ))}
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
