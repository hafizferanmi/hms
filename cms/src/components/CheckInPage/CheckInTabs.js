import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { formatDate, formatTime } from '../../helpers/misc'

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
    marginTop: 10
  },
  infoTitle: {
    fontWeight: 'bold',
    width: '30%',
    marginRight: 20,
    textAlign: 'right'
  },
  infoValue: {
    textAlign: 'right'
  }
}))

const CheckInTabs = ({ checkIn }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const { expenses = [] } = checkIn

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

  const checkInInfo = [
    { title: 'Checked In By', value: checkIn.checkedInBy.name },
    { title: 'Checked In Date', value: formatDate(checkIn.dateOfArrival) },
    { title: 'Checked In Time', value: formatTime(checkIn.dateOfArrival) },
    { title: 'Checked Out by', value: checkIn.checkedOut ? checkIn.checkedOutBy.name : 'Guest still checked in' },
    { title: 'Checked Out Date', value: checkIn.checkedOut ? formatDate(checkIn.checkedOutOn) : 'Guest still checked in' },
    { title: 'Checked Out Time', value: checkIn.checkedOut ? formatTime(checkIn.checkedOutOn) : 'Guest still checked in' }
  ]

  return (
    <div className={classes.root}>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label='checkin details tabs'>
          <Tab label='Guest Info' {...a11yProps(0)} />
          <Tab label='Expenses' {...a11yProps(1)} />
          <Tab label='CheckIn details' {...a11yProps(2)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Box style={{ marginTop: '30px' }}>
          {guestInfo.map((info, i) => (
            <Box key={i} display='flex' className={classes.guestInfoWrapper}>
              <div className={classes.infoTitle}> {info.title}:</div>
              <div className={classes.infoValue}>{info.value}</div>
            </Box>
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {expenses.map((info, i) => (
          <Box key={i} display='flex' className={classes.guestInfoWrapper}>
            <div className={classes.infoTitle}> {info.title}:</div>
            <div className={classes.infoValue}>{info.value}</div>
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box style={{ marginTop: '30px' }}>
          {checkInInfo.map((info, i) => (
            <Box key={i} display='flex' className={classes.guestInfoWrapper}>
              <div className={classes.infoTitle}> {info.title}:</div>
              <div className={classes.infoValue}>{info.value}</div>
            </Box>
          ))}
        </Box>
      </TabPanel>
    </div>
  )
}

export default CheckInTabs
