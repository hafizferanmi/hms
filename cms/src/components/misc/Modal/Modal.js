import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'

const ModalWrapper = styled(Modal)`
  .modal-content {
    margin-top: 100px;
  }
`

const CustomModal = ({ open = true, title, children, handleClose, size = 'md' }) => {
  return (
    <ModalWrapper show={open} onHide={handleClose} animation={false} size={size}>
      {
        title && (
          <Modal.Header closeButton>
            <Modal.Title>{title} </Modal.Title>
          </Modal.Header>
        )
      }
      <Modal.Body>{children}</Modal.Body>
    </ModalWrapper>
  )
}

export default CustomModal
