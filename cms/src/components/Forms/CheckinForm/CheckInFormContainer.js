import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import { store as notification } from 'react-notifications-component'
import { success, failed } from '../../../helpers/notification'
import {
  checkIn as addCheckInAPI,
  updateCheckIn as updateCheckInAPI,
  deleteCheckIn as deleteCheckInAPI
} from '../../../helpers/api'
import {
  addCheckIn as addCheckInAction,
  updateCheckIn as updateCheckInAction,
  deleteCheckIn as deleteCheckInAction
} from '../../../redux/actions/checkIn'
import CheckInForm from './CheckInForm'

const CheckInFormContainer = ({ checkIn, closeModal }) => {
  const checkInId = checkIn && checkIn._id
  const API = checkInId ? updateCheckInAPI : addCheckInAPI

  const dispatch = useDispatch()
  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    checkInId ? submitForm(checkInId, data) : submitForm(data)
  }

  useEffect(() => {
    if (response && response.success) {
      checkIn ? dispatch(updateCheckInAction(response.result)) : dispatch(addCheckInAction(response.result))
      const notificationMessage = checkIn ? 'CheckIn updated successfully' : 'CheckIn added successfully'
      notification.addNotification(success(notificationMessage))
      closeModal()
    }

    if (response && !response.success) {
      notification.addNotification(failed(response.message))
    }
    // eslint-disable-next-line
  }, [response])

  const serverFormState = {
    error: serverError,
    submitting,
    message: response && response.message
  }

  const {
    error: deleteServerError,
    loading: deleteProcessing,
    response: deleteResponse,
    executeFn: deleteAPI
  } = useAsyncFn(deleteCheckInAPI)

  const handleDelete = () => {
    deleteAPI(checkInId)
  }

  const deleteRoomTypeProps = {
    deleteServerError,
    deleteProcessing,
    deleteResponse,
    handleDelete
  }

  useEffect(() => {
    if (deleteResponse && deleteResponse.success) {
      dispatch(deleteCheckInAction(checkIn))
      notification.addNotification(success('CheckIn deleted successfully.'))
      closeModal()
    }

    if (deleteResponse && !deleteResponse.success) {
      notification.addNotification(failed(deleteResponse.message))
    }
    // eslint-disable-next-line
  }, [deleteResponse])
  return (
    <div>
      <CheckInForm
        checkIn={checkIn}
        serverFormState={serverFormState}
        handleFormSubmit={handleFormSubmit}
        deleteRoomTypeProps={deleteRoomTypeProps}
      />
    </div>
  )
}

export default CheckInFormContainer
