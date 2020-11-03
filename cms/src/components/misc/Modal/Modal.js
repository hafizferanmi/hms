import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContentWrapper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2, 3),
    borderRadius: '5px',
    width: '600px'
  }
}))

const CustomModal = ({ open, children, handleClose, title }) => {
  const classes = useStyles()
  return (
    <Modal
      aria-labelledby={title}
      aria-describedby={title}
      className={classes.modal}
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <div className={classes.modalContentWrapper}>
        {children}
      </div>
    </Modal>
  )
}

export default CustomModal
