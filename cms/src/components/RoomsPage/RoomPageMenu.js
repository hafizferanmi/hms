import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, MenuItem } from '@material-ui/core'
import useOutsideClick from '../../hooks/useOutsideClick'
import AddIcon from '@material-ui/icons/Add'
import EyeIcon from '@material-ui/icons/VisibilityOutlined'
import EditIcon from '@material-ui/icons/CreateOutlined'
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined'

const useStyles = makeStyles((theme) => ({
  icons: {
    width: '18px',
    marginRight: '5px'
  }
}))

export const RoomCardMenu = ({ handleClose, handleDelete, handleUpdate, handleBookRoom }) => {
  const ref = useRef(null)
  const classes = useStyles()
  useOutsideClick(ref, handleClose)
  return (
    <Card variant='outlined' ref={ref}>
      <MenuItem onClick={() => handleBookRoom()}>
        <AddIcon className={classes.icons} />Book room
      </MenuItem>
      <MenuItem onClick={() => handleUpdate()}>
        <EyeIcon className={classes.icons} /> View reservation
      </MenuItem>
      <MenuItem onClick={() => handleUpdate()}>
        <EditIcon className={classes.icons} /> Update
      </MenuItem>
      <MenuItem onClick={() => handleDelete()}>
        <DeleteIcon className={classes.icons} /> Delete
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
        <EditIcon className={classes.icons} /> Update
      </MenuItem>
      <MenuItem onClick={() => handleDelete()}>
        <DeleteIcon className={classes.icons} /> Delete
      </MenuItem>
    </Card>
  )
}
