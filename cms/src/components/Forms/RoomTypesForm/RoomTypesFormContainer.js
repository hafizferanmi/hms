import React from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import useNotify from '../../../hooks/useNotify'
import {
  addRoomType as addRoomTypeAPI,
  updateRoomType as updateRoomTypeAPI,
  deleteRoomType as deleteRoomTypeAPI
} from '../../../helpers/api'
import {
  addRoomType as addRoomTypeAction,
  updateRoomType as updateRoomTypeAction,
  deleteRoomType as deleteRoomTypeAction
} from '../../../redux/actions/roomTypeAction'
import RoomTypeForm from './RoomTypeForm'

const RoomTypesFormContainer = ({ roomType, closeModal }) => {
  const roomTypeId = roomType && roomType._id
  const API = roomTypeId ? updateRoomTypeAPI : addRoomTypeAPI

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    roomTypeId ? submitForm(roomTypeId, data) : submitForm(data)
  }

  useNotify({
    message: roomType ? 'Room type updated successfully' : 'Room type added successfully',
    action: roomType ? updateRoomTypeAction : addRoomTypeAction,
    response,
    callback: closeModal
  })

  const serverFormState = {
    error: serverError,
    submitting,
    message: response && response.message
  }

  const {
    error: deleteRoomTypeServerError,
    loading: deleteRoomTypeProcessing,
    response: deleteRoomTypeResponse,
    executeFn: deleteRoomType
  } = useAsyncFn(deleteRoomTypeAPI)

  const handleDeleteRoomType = () => {
    deleteRoomType(roomTypeId)
  }

  const deleteRoomTypeProps = {
    deleteRoomTypeServerError,
    deleteRoomTypeResponse,
    deleteRoomTypeProcessing,
    handleDeleteRoomType
  }

  useNotify({
    message: 'Room type deleted successfully.',
    action: deleteRoomTypeAction,
    response: deleteRoomTypeResponse,
    callback: closeModal
  })

  return (
    <div>
      <RoomTypeForm
        roomType={roomType}
        serverFormState={serverFormState}
        handleFormSubmit={handleFormSubmit}
        deleteRoomTypeProps={deleteRoomTypeProps}
      />
    </div>
  )
}

export default RoomTypesFormContainer
