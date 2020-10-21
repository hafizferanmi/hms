import React from 'react'
import styled from 'styled-components'
import CreateRoomTypesButton from './CreateRoomTypesButton'
import Modal from '../misc/Modal'
import useModal from '../../hooks/useModal'
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

const RoomTypesPage = ({ roomTypes }) => {
  const { isOpen, closeModal, openModal, data: selectedRoomType } = useModal()
  const handleOpenModal = (data) => openModal(data)
  const handleCloseModal = () => closeModal()

  return (
    <>
      <PageTopWrapper>
        <h4>Room types</h4>
        <CreateRoomTypesButton
          handleClick={handleOpenModal}
        />
      </PageTopWrapper>
      <div>
        {roomTypes.length
          ? (
            <StyledCardWrapper>
              {
                roomTypes.map((roomType, i) =>
                  (
                    <RoomTypeCard
                      key={i}
                      roomType={roomType}
                      handleOpenModal={handleOpenModal}
                    />
                  ))
              }

            </StyledCardWrapper>
          )
          : <div>You have not added any room types yet.</div>}
      </div>
      <Modal
        open={isOpen}
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

const RoomTypeCard = ({ roomType, handleOpenModal }) => {
  return (
    <StyledRoomTypeCard
      onClick={() => handleOpenModal(roomType)}
    >
      {roomType.name}
    </StyledRoomTypeCard>
  )
}

export default RoomTypesPage
