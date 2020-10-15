import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import Button from '../Button'

const ConfirmModalWrapper = styled.div`
  text-align: center;
  padding: 50px;
`

const ButtonWrapper = styled.div`
  margin-top: 40px;

  button:first-child {
    background-color: red;
    margin-right: 10px;
  }
`

const ConfirmModal = ({ isOpen, title, closeModal, message, confirmAction }) => {
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
      <ConfirmModalWrapper>
        <h2>{title}</h2>
        <div>{message}</div>
        <ButtonWrapper>
          <Button
            label='Yes'
            onClick={handleConfirmAction}
          />
          <Button
            label='No'
            onClick={() => closeModal()}
          />
        </ButtonWrapper>
      </ConfirmModalWrapper>
    </Modal>
  )
}

export default ConfirmModal
