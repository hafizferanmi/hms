import React from 'react'
import styled from 'styled-components'
import CreateStaffButton from './CreateStaffButton'
import StaffsTable from './StaffTable'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import StaffForm from '../Forms/StaffForm'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StaffsPage = ({ staffs }) => {
  const { isOpen, openModal, closeModal, data: staff } = useModal()
  const handleOpen = (data) => openModal(data)
  const handleClose = () => closeModal()
  return (
    <>
      <PageTopWrapper>
        <h3>Our company staffs</h3>
        <CreateStaffButton handleClick={handleOpen} />
      </PageTopWrapper>
      <div>
        {staffs.length ? (
          <StaffsTable
            staffs={staffs}
            handleOpen={handleOpen}
          />
        ) : <div>You have not added any staff yet.</div>}
      </div>
      <Modal
        open={isOpen}
        handleClose={handleClose}
        size='md'
      >
        <StaffForm staff={staff} closeModal={handleClose} />
      </Modal>
    </>
  )
}

export default StaffsPage
