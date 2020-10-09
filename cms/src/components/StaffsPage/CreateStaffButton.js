import React from 'react'
import Button from '../misc/Button'
import Modal from '../misc/Modal'
import StaffForm from '../Forms/StaffForm'
import useModal from '../../hooks/useModal'

const CreateStaffButton = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const handleOpen = () => openModal()
  const handleClose = () => closeModal()
  return (
    <>
      <Button
        label='Add staff'
        onClick={handleOpen}
      />
      <Modal
        open={isOpen}
        title='Add new staff'
        handleClose={handleClose}
        size='lg'
      >
        <StaffForm closeModal={handleClose} />
      </Modal>
    </>
  )
}

export default CreateStaffButton
