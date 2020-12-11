import React from 'react'
import { makeStyles, IconButton, Box } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import cn from 'clsx'
import { RoomCardMenu, RoomTypeCardMenu } from './RoomPageMenu'

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
    marginBottom: 10
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
    background: '#ff623a',
    color: 'white',
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

export const RoomCard = ({ room }) => {
  const { number, status, cleanStatus } = room
  const classes = useStyles()
  const [showMenu, setMenuVisible] = React.useState(false)
  const handleClose = () => setMenuVisible(false)
  return (
    <div className={classes.roomCardWrapper}>
      <div className={classes.roomNumer}>Room {number}</div>
      <div className={classes.statusWrapper}>
        <span className={cn(classes.cleanStatus, classes.statuses)}>{cleanStatus}</span>
        <span className={cn(classes.statuses, classes.emptyStatus)}>{status}</span>
      </div>
      <div className={classes.dotIconWrapper}>
        <IconButton onClick={() => setMenuVisible(true)}>
          <MoreVertIcon />
        </IconButton>
      </div>
      {showMenu && (
        <div className={cn(classes.menuWrapper)}>
          <RoomCardMenu
            handleClose={handleClose}
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
    boxShadow: '0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.16);'
  }
})

export const RoomTypeCard = ({ roomType }) => {
  const { name } = roomType
  const classes = useTypeClasses()
  const [showRoomTypeMenu, setMenuVisible] = React.useState(false)
  const handleCloseMenu = () => setMenuVisible(false)

  return (
    <Box style={{ position: 'relative', width: 'fit-content' }}>
      <span className={classes.roomTypeName}>{name}</span>
      <IconButton onClick={() => setMenuVisible(true)}>
        <MoreVertIcon className={classes.moreIcon} />
      </IconButton>
      {showRoomTypeMenu && <div className={classes.roomTypeMenu}><RoomTypeCardMenu handleClose={handleCloseMenu} /></div>}
    </Box>

  )
}
