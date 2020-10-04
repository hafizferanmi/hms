import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
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

  const dispatch = useDispatch()
  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    roomTypeId ? submitForm(roomTypeId, data) : submitForm(data)
  }

  useEffect(() => {
    if (response && response.success) {
      roomType ? dispatch(updateRoomTypeAction(response.result)) : dispatch(addRoomTypeAction(response.result))
      closeModal()
    }
    // eslint-disable-next-line
  }, [response])

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

  useEffect(() => {
    if (deleteRoomTypeResponse && deleteRoomTypeResponse.success) {
      dispatch(deleteRoomTypeAction(roomType))
      closeModal()
    }
    // eslint-disable-next-line
  }, [deleteRoomTypeResponse])
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
