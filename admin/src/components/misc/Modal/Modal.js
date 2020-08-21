import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = ({ open = true, title, children, handleClose }) => {
  return (
    <Modal show={open} onHide={handleClose} animation={false} size='md'>
      <Modal.Header closeButton>
        <Modal.Title>{title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default CustomModal
