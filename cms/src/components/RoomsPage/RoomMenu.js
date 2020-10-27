import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, MenuItem } from '@material-ui/core'
import useOutsideClick from '../../hooks/useOutsideClick'

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    position: 'absolute',
    right: '50px',
    top: '30px',
    width: '150px'
  },
  icons: {
    width: '18px',
    marginRight: '5px'
  }
}))

const RoomMenu = ({ handleClose, handleDelete, handleUpdate }) => {
  const classes = useStyles()
  const ref = useRef(null)
  useOutsideClick(ref, handleClose)
  return (
    <Card variant='outlined' ref={ref} className={classes.menuContainer}>
      <MenuItem onClick={() => handleUpdate()}>
        Update
      </MenuItem>
      <MenuItem onClick={() => handleDelete()}>
        Delete
      </MenuItem>
    </Card>
  )
}

export default RoomMenu
