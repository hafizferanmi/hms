import React from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import useNotify from '../../../hooks/useNotify'
import {
  addRoom as addRoomAPI,
  updateRoom as updateRoomAPI
} from '../../../helpers/api'
import {
  addRoom as addRoomAction,
  updateRoom as updateRoomAction
} from '../../../redux/actions/rooms'
import RoomForm from './RoomForm'

const RoomFormContainer = ({ room, closeModal, roomTypeId }) => {
  const roomId = room && room._id
  const API = roomId ? updateRoomAPI : addRoomAPI

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    roomId ? submitForm(roomId, data) : submitForm({ ...data, roomType: roomTypeId })
  }

  useNotify({
    message: roomId ? 'Room updated successfully' : 'Room added successfully',
    action: roomId ? updateRoomAction : addRoomAction,
    response,
    callback: closeModal
  })

  const serverFormState = {
    error: serverError,
    submitting,
    success: response && response.success,
    message: response && response.message
  }
  return (
    <RoomForm
      serverFormState={serverFormState}
      room={room}
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default RoomFormContainer
