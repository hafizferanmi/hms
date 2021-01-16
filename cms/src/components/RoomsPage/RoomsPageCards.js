import React from 'react'
import { makeStyles, IconButton, Box } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import cn from 'clsx'
import { RoomCardMenu, RoomTypeCardMenu } from './RoomPageMenu'
import { ROOM_STATUS, ROOM_CLEAN_STATUS } from '../../constants/room'

const useStyles = makeStyles({
  roomCardWrapper: {
    border: '1px solid rgba(181, 192, 208, .5)',
    padding: 5,
    paddingLeft: 10,
    position: 'relative',
    borderRadius: 5,
    userSelect: 'none'
  },
  statusWrapper: {
    marginTop: 15,
    marginBottom: 10,
    '& > .empty': {
      color: 'white',
      background: 'grey'
    },
    '& > .booked': {
      background: 'orange',
      color: 'white'
    },
    '& > .reserved': {
      color: 'white',
      background: 'lightblue'
    },
    '& > .notAvailable': {
      color: 'white',
      background: 'pink'
    },
    '& > .clean': {
      color: 'black',
      background: 'lightgreen'
    },
    '& > .dirty': {
      color: 'white',
      background: 'red'
    },
    '& > .cleaning': {
      color: 'white',
      background: 'black'
    }
  },
  statuses: {
    padding: 5,
    fontSize: 8,
    textTransform: 'capitalize',
    borderRadius: 3
  },
  cleanStatus: {
    background: 'rgba(0, 102, 245, 0.1)'
  },
  emptyStatus: {
    marginLeft: 5
  },
  roomNumer: {
    fontSize: 12,
    color: '#1e272e',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 5
  },
  dotIconWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg': {
      fontSize: 14
    }
  },
  menuWrapper: {
    position: 'absolute',
    top: 32,
    right: '-50px',
    zIndex: 200
  },
  roomTypeMenu: {
    position: 'absolute',
    top: 0,
    right: 5
  }
})

const ROOM_STATUS_CLASSES = {
  [ROOM_STATUS.BOOKED]: 'booked',
  [ROOM_STATUS.EMPTY]: 'empty',
  [ROOM_STATUS.RESERVED]: 'reserved',
  [ROOM_STATUS.NOT_AVAILABLE]: 'notAvailable'
}

const ROOM_CLEAN_STATUS_CLASSES = {
  [ROOM_CLEAN_STATUS.CLEAN]: 'clean',
  [ROOM_CLEAN_STATUS.DIRTY]: 'dirty',
  [ROOM_CLEAN_STATUS.CLEANING]: 'cleaning'
}

export const RoomCard = ({ room, handleUpdate, handleDelete }) => {
  const { number, status, cleanStatus } = room
  const classes = useStyles()
  const [showMenu, setMenuVisible] = React.useState(false)
  const handleClose = () => setMenuVisible(false)
  return (
    <div className={classes.roomCardWrapper}>
      <div className={classes.roomNumer}>Room {number}</div>
      <div className={classes.statusWrapper}>
        <span className={cn(ROOM_CLEAN_STATUS_CLASSES[cleanStatus], classes.statuses)}>{cleanStatus}</span>
        <span className={cn(ROOM_STATUS_CLASSES[status], classes.statuses, classes.emptyStatus)}>{status}</span>
      </div>
      <div className={classes.dotIconWrapper}>
        <IconButton onClick={() => setMenuVisible(true)}>
          <MoreVertIcon />
        </IconButton>
      </div>
      {showMenu && (
        <div className={cn(classes.menuWrapper)}>
          <RoomCardMenu
            roomStatus={room.status}
            handleClose={handleClose}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  )
}

const useTypeClasses = makeStyles({
  moreIcon: {
    fontSize: 12
  },
  roomTypeMenu: {
    position: 'absolute',
    top: -40,
    left: 140,
    zIndex: 200,
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.31), 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    visibility: 'hidden',
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'all 200ms ease-in-out'
  },
  roomTypeMenuOpened: {
    visibility: 'visible',
    opacity: 1,
    transform: 'scale(1)'
  }
})

export const RoomTypeCard = ({ roomType, handleAddRoom, handleUpdate, handleDelete }) => {
  const { name } = roomType
  const classes = useTypeClasses()
  const [showRoomTypeMenu, setMenuVisible] = React.useState(false)
  const handleCloseMenu = () => { setMenuVisible(false); console.log('Closed') }
  const handleOpenMenu = () => { setMenuVisible(true); console.log('Clicked') }

  return (
    <Box style={{ position: 'relative', width: 'fit-content' }}>
      <span className={classes.roomTypeName}>{name}</span>
      <IconButton onClick={handleOpenMenu}>
        <MoreVertIcon className={classes.moreIcon} />
      </IconButton>
      <div className={cn(classes.roomTypeMenu, showRoomTypeMenu && classes.roomTypeMenuOpened)}>
        <RoomTypeCardMenu
          handleClose={handleCloseMenu}
          handleAddRoom={handleAddRoom}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </Box>

  )
}
