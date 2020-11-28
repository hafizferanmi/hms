import React from 'react'
import cn from 'clsx'
import PerfectScrollBar from 'react-perfect-scrollbar'
import { Box, makeStyles } from '@material-ui/core'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import CheckInTabs from './CheckInTabs'
import { formatDate } from '../../helpers/misc'
import { CheckOutButton, DeleteButton, EditButton } from './ChecInPageButtons'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  seletetedCheckinWrapper: {
    background: 'white',
    maxHeight: 'calc(100vh - 110px)',
    height: 'calc(100vh - 110px)',
    overflow: 'hidden',
    padding: 20,
    borderRadius: 5
  },
  noCheckinSelectedWrapper: {
    height: '100%',
    '& p:first-of-type': {
      color: '#0c2e67',
      fontSize: 24
    },
    '& p:last-of-type': {
      color: '#b5c0d0',
      fontSize: 18
    }
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  centerAlign: {
    textAlign: 'center'
  },
  emptyIcon: {
    width: 120,
    height: 120,
    color: '#b5c0d0'
  },
  guestIcon: {
    width: 100,
    height: 100,
    color: '#b5c0d0'
  },
  topDescWrapper: {
    marginTop: 10,
    width: '100%',
    position: 'relative',
    marginLeft: 30,
    '& p:first-of-type': {
      fontSize: 25,
      color: '#1e272e',
      fontWeight: 'bold',
      textTransform: 'capitalize'
    }
  },
  iconWrappers: {
    position: 'absolute',
    top: 2,
    right: 0,
    '& > div:last-of-type': {
      marginTop: 10
    }
  },
  checkedOutText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const CheckInDesc = ({ checkIn, clearSelectedCheckin }) => {
  const { data: storeCheckins } = useSelector(state => state.checkIns)
  const updatedCheckIn = checkIn && storeCheckins.find(storeCheckin => storeCheckin._id === checkIn._id)
  const classes = useStyles()
  return (
    <div className={classes.seletetedCheckinWrapper}>
      <PerfectScrollBar>
        {checkIn && <CheckInSelected clearSelectedCheckin={clearSelectedCheckin} checkIn={updatedCheckIn} />}
        {!checkIn && <NoCheckInSelected />}
      </PerfectScrollBar>
    </div>
  )
}

const CheckInSelected = ({ checkIn, clearSelectedCheckin }) => {
  const { name } = checkIn.guest
  const { dateOfArrival, room: { number: roomNumber } } = checkIn
  const date = formatDate(dateOfArrival)
  const classes = useStyles()
  return (
    <Box style={{ position: 'relative', height: '100%' }}>
      {!checkIn.checkedOut && <CheckOutButton checkIn={checkIn} className={classes.fab} />}
      {checkIn.checkedOut && <p className={cn(classes.fab, classes.checkedOutText)}>Guest already checked out</p>}
      <Box
        display='flex'
        style={{ paddingBottom: '20px', position: 'relative' }}
      >
        <AccountCircleOutlinedIcon className={classes.guestIcon} />
        <div className={classes.topDescWrapper}>
          <p>{name}</p>
          <p>Arrived {date}</p>
          <p>Room <strong>{roomNumber}</strong></p>
          {
            !checkIn.checkedOut && (
              <Box display='flex' flexDirection='column' className={classes.iconWrappers}>
                <EditButton checkIn={checkIn} />
                <DeleteButton checkIn={checkIn} clearSelectedCheckin={clearSelectedCheckin} />
              </Box>
            )
          }
        </div>
      </Box>
      <Box>
        <CheckInTabs checkIn={checkIn} />
      </Box>
    </Box>
  )
}

const NoCheckInSelected = () => {
  const classes = useStyles()
  return (
    <Box display='flex' justifyContent='center' alignItems='center' className={classes.noCheckinSelectedWrapper}>
      <div className={classes.centerAlign}>
        <CollectionsBookmarkIcon className={classes.emptyIcon} />
        <p>Select guest to view details</p>
        <p>Try selecting a check in to display it in this window.</p>
      </div>
    </Box>
  )
}

export default CheckInDesc
