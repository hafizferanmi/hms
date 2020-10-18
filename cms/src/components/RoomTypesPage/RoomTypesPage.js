import React, { useState } from 'react'
import styled from 'styled-components'
import CreateRoomTypesButton from './CreateRoomTypesButton'
import Modal from '../misc/Modal'
import RoomTypesForm from '../Forms/RoomTypesForm'

const PageTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;

`

const StyledRoomTypeCard = styled.div`
  padding: 10px;
  width: 25%;
  border: 2px solid lightblue;
  border-radius: 5px;
  text-align: center;
  background: white;
  cursor: pointer;

  :not(:first-child) {
    margin-left: 10px;
  }
`

const RoomTypeGridWrapper = ({ roomTypes, handleCardClick }) => {
  return (
    <StyledCardWrapper>
      {roomTypes.map((roomtype, i) =>
        <StyledRoomTypeCard onClick={() => handleCardClick(roomtype)} key={i}>
          <StyledCardWrapper>{roomtype.name}</StyledCardWrapper>
        </StyledRoomTypeCard>
      )}
    </StyledCardWrapper>
  )
}

const RoomTypesPage = ({ roomTypes, formModal }) => {
  const { isOpen, closeModal, openModal } = formModal
  const [selectedRoomType, setSelectedRoomType] = useState(null)
  const modalTitle = selectedRoomType ? 'Edit room type' : 'Add room type'

  const handleOpenModal = (data) => {
    setSelectedRoomType(data)
    openModal()
  }

  const handleCloseModal = () => {
    setSelectedRoomType(null)
    closeModal()
  }

  return (
    <>
      <PageTopWrapper>
        <h3>Room types</h3>
        <CreateRoomTypesButton
          handleClick={handleOpenModal}
        />
      </PageTopWrapper>
      <div>
        {roomTypes
          ? (
            <RoomTypeGridWrapper
              roomTypes={roomTypes}
              handleCardClick={handleOpenModal}
            />
          )
          : <div>You have not added any room types yet.</div>}
      </div>
      <Modal
        open={isOpen}
        title={modalTitle}
        handleClose={handleCloseModal}
        size='sm'
      >
        <RoomTypesForm
          closeModal={handleCloseModal}
          roomType={selectedRoomType}
        />
      </Modal>
    </>
  )
}

export default RoomTypesPage
