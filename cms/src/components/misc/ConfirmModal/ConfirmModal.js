import React from 'react'
import Modal from '../Modal'
import Button from '../Button'
import { red, green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  confirmModalWrapper: {
    textAlign: 'center',
    padding: 50
  },
  buttonWrapper: {
    marginTop: 40
  },
  yesButton: {
    background: red[400]
  },
  noButton: {
    background: green[400]
  }
})

const ConfirmModal = ({ isOpen, title, closeModal, message, confirmAction }) => {
  const classes = useStyles()
  const handleConfirmAction = () => {
    confirmAction()
    closeModal()
  }
  return (
    <Modal
      open={isOpen}
      handleClose={closeModal}
      size='lg'
    >
      <div className={classes.confirmModalWrapper}>
        <h2>{title}</h2>
        <div>{message}</div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.yesButton}
            label='Yes'
            onClick={handleConfirmAction}
          />
          <Button
            className={classes.noButton}
            label='No'
            onClick={() => closeModal()}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal
