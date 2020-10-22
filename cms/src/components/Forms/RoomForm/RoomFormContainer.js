import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import notification from 'cogo-toast'
import { notify } from '../../../helpers/notification'
import {
  addRoom as addRoomAPI,
  updateRoom as updateRoomAPI
} from '../../../helpers/api'
import {
  addRoom as addRoomAction,
  updateRoom as updateRoomAction
} from '../../../redux/actions/rooms'
import RoomForm from './RoomForm'
import ErrorMessage from '../../misc/ErrorMessage'

const RoomFormContainer = ({ room, closeModal }) => {
  const roomId = room && room._id
  const API = roomId ? updateRoomAPI : addRoomAPI

  const dispatch = useDispatch()
  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    roomId ? submitForm(roomId, data) : submitForm(data)
  }

  useEffect(() => {
    if (response && response.success) {
      roomId ? dispatch(updateRoomAction(response.result)) : dispatch(addRoomAction(response.result))
      const notificationMessage = roomId ? 'Room updated successfully' : 'Room added successfully'
      notification.success(...notify(notificationMessage))
      closeModal()
    }

    if (response && !response.success) {
      notification.error(...notify(<ErrorMessage message={response.message} />))
    }
    // eslint-disable-next-line
  }, [response])

  const serverFormState = {
    error: serverError,
    submitting,
    success: response && response.success,
    message: response && response.message
  }
  return (
    <div>
      <RoomForm
        serverFormState={serverFormState}
        room={room}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  )
}

export default RoomFormContainer
