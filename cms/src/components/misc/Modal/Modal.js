import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { Close as CloseIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'

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
    // width: '600px',
    position: 'relative'
  },
  cancelButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    cursor: 'pointer',
    padding: 5,
    borderRadius: '50%',
    background: grey[100],
    color: grey[500],
    '&:hover': {
      background: grey[300],
      color: grey[800]

    }
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
        <CloseIcon onClick={handleClose} className={classes.cancelButton} />
        {children}
      </div>
    </Modal>
  )
}

export default CustomModal
