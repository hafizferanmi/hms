import React from 'react'
import PerfectScrollBar from 'react-perfect-scrollbar'
import { Box, Fab, makeStyles, IconButton } from '@material-ui/core'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import CheckInTabs from './CheckInTabs'

const useStyles = makeStyles({
  seletetedCheckinWrapper: {
    background: 'white',
    maxHeight: 'calc(100vh - 150px)',
    height: 'calc(100vh - 150px)',
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
  moreOptionIconButton: {
    position: 'absolute',
    top: 10,
    right: 0
  }
})

const CheckInDesc = ({ checkIn }) => {
  const classes = useStyles()
  return (
    <div className={classes.seletetedCheckinWrapper}>
      <PerfectScrollBar>
        {checkIn && <CheckInSelected checkIn={checkIn} />}
        {!checkIn && <NoCheckInSelected />}
      </PerfectScrollBar>
    </div>
  )
}

const CheckInSelected = ({ checkIn }) => {
  const classes = useStyles()
  const handleCheckOut = () => window.alert('Are you sure you want to checkout this guest.')
  return (
    <Box style={{ position: 'relative', height: '100%' }}>
      <Fab onClick={handleCheckOut} className={classes.fab} color='primary' aria-label='checkout'>
        <DoneAllIcon />
      </Fab>
      <Box
        display='flex'
        style={{ paddingBottom: '20px', position: 'relative' }}
      >
        <AccountCircleOutlinedIcon className={classes.guestIcon} />
        <div className={classes.topDescWrapper}>
          <p>{checkIn.name}</p>
          <p>Arrived 25th, October, 2020</p>
          {/* <p>Checked in by: Tunji Kilani</p> */}
          <p>Checked out on 26th, November, 2020</p>
          {/* <p>Checked out by: AdeTutu Bimpe</p> */}
          <p>Room <strong>A304</strong></p>
          <IconButton className={classes.moreOptionIconButton}>
            <MoreHorizOutlinedIcon className={classes.moreOptionIcon} />
          </IconButton>
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
        <p>Select a check in to display</p>
        <p>Try selecting a check in to display it in this window.</p>
      </div>
    </Box>
  )
}

export default CheckInDesc
