import React from 'react'
import { groupBy } from 'ramda'
import styled from 'styled-components'
import Button from '../misc/Button'
import Modal from '../misc/Modal'
import useModal from '../../hooks/useModal'
import CheckInForm from '../Forms/CheckinForm'
import RoomForm from '../Forms/RoomForm'

const RoomsPageWrapper = styled.div`
  width: 100%;
`

const RoomsGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .room-type-wrapper {
    margin-top: 40px;
    width: 24%;
    background-color: white;
    padding: 10px;

    p {
      margin: 0px;
    }

    > div {

      .room-number {
        background-color: rgba(173, 216, 230, 0.5);
        padding: 20px 10px;
        margin: 10px 0;
        border-radius: 5px;
        cursor: pointer;
      }

      .no-added-room {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
`

const RoomsPage = ({ rooms, roomTypes }) => {
  const groupByRoomType = groupBy(room => room.roomTypeId)
  const groupedRooms = groupByRoomType(rooms)
  const roomsWithType = roomTypes.map((roomType) => ({ _id: roomType._id, name: roomType.name, rooms: groupedRooms[roomType._id] }))
  const { isOpen, openModal, closeModal, data } = useModal()
  const { isOpen: roomFormOpen, openModal: openRoomFormModal, closeModal: closeRoomFormModal, data: selectedRoom } = useModal()
  return (
    <RoomsPageWrapper>
      <h4>Our rooms</h4>
      <RoomsGridWrapper>
        {roomsWithType.map((type, i) =>
          (
            <div className='room-type-wrapper' key={i}>
              <p>{type.name}</p>
              <div>
                {
                  type.rooms
                    ? type.rooms.map((room, i) =>
                      <div className='room-number' onClick={() => openModal(room._id)} key={i}>
                        Room {room.number}
                      </div>)
                    : <div className='no-added-room'>No room is added yet</div>
                }
              </div>
              <div className='button-container'>
                <Button fullWidth label='Add new room' onClick={() => openRoomFormModal(type._id)} />
              </div>
            </div>
          ))}
        <Modal
          open={isOpen}
          size='lg'
          handleClose={() => closeModal()}
        >
          <CheckInForm checkIn={{ room: data }} />
        </Modal>
        <Modal
          open={roomFormOpen}
          handleClose={() => closeRoomFormModal()}
        >
          <RoomForm
            closeModal={() => closeRoomFormModal()}
            room={{ roomType: selectedRoom }}
          />
        </Modal>
      </RoomsGridWrapper>

    </RoomsPageWrapper>
  )
}

export default RoomsPage
