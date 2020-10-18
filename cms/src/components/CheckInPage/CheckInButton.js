import React from 'react'
import Button from '../misc/Button'
import Modal from '../misc/Modal'
import CheckinForm from '../Forms/CheckinForm'
import useModal from '../../hooks/useModal'

const CheckInButton = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const handleOpen = () => openModal()
  const handleClose = () => closeModal()
  return (
    <>
      <Button
        label='CheckIn guest'
        onClick={handleOpen}
      />
      <Modal
        open={isOpen}
        // title='Checkin guest'
        handleClose={handleClose}
        size='lg'
      >
        <CheckinForm closeModal={handleClose} />
      </Modal>
    </>
  )
}

export default CheckInButton
