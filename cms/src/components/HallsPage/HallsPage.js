import React from 'react'
import styled from 'styled-components'
import useModal from '../../hooks/useModal'
import Button from '../misc/Button'
import Modal from '../misc/Modal'
import HallForm from '../Forms/HallForm'

const HallCardWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const HallsPage = ({ halls }) => {
  const { isOpen, closeModal, openModal, data: selectedHall } = useModal()
  const handleOpenModal = (data) => openModal(data)
  const handleCloseModal = () => closeModal()
  return (
    <>
      <div>
        <p>Halls</p>
        <Button label='Add hall' onClick={() => handleOpenModal()} />
      </div>
      {halls.length ? (
        <HallCardWrapper>
          {halls.map((hall, i) =>
            (
              <HallCard
                key={i}
                hall={hall}
                handleOpenModal={handleOpenModal}
              />
            ))}
        </HallCardWrapper>
      ) : <div>You have not added any hall yet.</div>}
      <Modal
        open={isOpen}
        handleClose={handleCloseModal}
      >
        <HallForm closeModal={closeModal} hall={selectedHall} />
      </Modal>
    </>
  )
}

const StyledHallCard = styled.div`
  background-color: white;
  width: 23%;
  padding: 20px;
  height: 100px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid lightblue;
  margin-top: 10px;
`

const HallCard = ({ hall, handleOpenModal }) => {
  return (
    <StyledHallCard onClick={() => handleOpenModal(hall)}>{hall.name}</StyledHallCard>
  )
}

export default HallsPage
