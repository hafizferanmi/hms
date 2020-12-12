import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, MenuItem } from '@material-ui/core'
import useOutsideClick from '../../hooks/useOutsideClick'
import AddIcon from '@material-ui/icons/Add'
import EyeIcon from '@material-ui/icons/VisibilityOutlined'
import EditIcon from '@material-ui/icons/CreateOutlined'
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined'
import { ROOM_STATUS } from '../../constants/room'

const useStyles = makeStyles((theme) => ({
  icons: {
    width: '18px',
    marginRight: '5px'
  }
}))

export const RoomCardMenu = ({ roomStatus, handleClose, handleDelete, handleUpdate }) => {
  const ref = useRef(null)
  const classes = useStyles()
  const bookable = roomStatus === ROOM_STATUS.EMPTY
  const reserved = roomStatus === ROOM_STATUS.RESERVED
  useOutsideClick(ref, handleClose)

  const handleBookRoom = () => window.alert('Room will be booked soon')
  const handleReserveRoom = () => window.alert('Room will be reserved soon')
  return (
    <Card variant='outlined' ref={ref}>
      {bookable && (
        <MenuItem onClick={() => handleBookRoom()}>
          <AddIcon className={classes.icons} />Create booking
        </MenuItem>
      )}
      {reserved && (
        <MenuItem onClick={() => handleReserveRoom()}>
          <EyeIcon className={classes.icons} /> View reservation
        </MenuItem>
      )}
      <MenuItem onClick={() => handleUpdate()}>
        <EditIcon className={classes.icons} /> Update room
      </MenuItem>
      <MenuItem onClick={() => handleUpdate()}>
        <EditIcon className={classes.icons} /> Change status
      </MenuItem>
      <MenuItem onClick={() => handleDelete()}>
        <DeleteIcon className={classes.icons} /> Delete room
      </MenuItem>
    </Card>
  )
}

export const RoomTypeCardMenu = ({ handleClose, handleAddRoom, handleDelete, handleUpdate }) => {
  const ref = useRef(null)
  const classes = useStyles()
  useOutsideClick(ref, handleClose)
  return (
    <Card variant='outlined' ref={ref}>
      <MenuItem onClick={() => handleAddRoom()}>
        <AddIcon className={classes.icons} /> Add new room
      </MenuItem>
      <MenuItem onClick={() => handleUpdate()}>
        <EditIcon className={classes.icons} /> Update room type
      </MenuItem>
      <MenuItem onClick={() => handleDelete()}>
        <DeleteIcon className={classes.icons} /> Delete room type
      </MenuItem>
    </Card>
  )
}
