import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  guestInfoWrapper: {
    background: 'red'
  }
}))

const CheckInTabs = ({ checkIn }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const guestInfo = [
    { title: 'Name', value: checkIn.guest.name },
    { title: 'Email', value: checkIn.guest.email },
    { title: 'Phone', value: checkIn.guest.phone },
    { title: 'Occupation', value: checkIn.guest.occupation },
    { title: 'Arriving from', value: checkIn.guest.arrivingFrom },
    { title: 'Purpose', value: checkIn.guest.purpose },
    { title: 'Means of travel', value: checkIn.guest.meansOfTravel },
    { title: 'Next of kin', value: checkIn.guest.nextOfKin },
    { title: 'Next of kin phone No', value: checkIn.guest.nextOfKinPhoneNo }
  ]

  return (
    <div className={classes.root}>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label='checkin details tabs'>
          <Tab label='Guest Info' {...a11yProps(0)} />
          <Tab label='Expenses' {...a11yProps(1)} />
          <Tab label='CheckIn details' {...a11yProps(2)} />
          <Tab label='Checkout info' {...a11yProps(3)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        {guestInfo.map((info, i) => (
          <Box key={i} display='flex' className={classes.guestInfoWrapper}>
            <div className={classes.infoTitle}> {info.title}</div>
            <div className={classes.infoValue}>{info.value}</div>
          </Box>
        ))}

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  )
}

export default CheckInTabs
