import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import notification from 'cogo-toast'
import { notify } from '../../../helpers/notification'
import {
  checkIn as addCheckInAPI,
  updateCheckIn as updateCheckInAPI,
  deleteCheckIn as deleteCheckInAPI
} from '../../../helpers/api'
import ErrorMessage from '../../misc/ErrorMessage'
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
      const bookedRoom = response.result.bookedRoom
      console.log(bookedRoom)
      const newCheckIn = response.result.checkIn
      checkIn ? dispatch(updateCheckInAction(newCheckIn)) : dispatch(addCheckInAction(newCheckIn))
      const notificationMessage = checkIn ? 'CheckIn updated successfully' : 'CheckIn added successfully'
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

  const deleteProps = {
    deleteServerError,
    deleteProcessing,
    deleteResponse,
    handleDelete
  }

  useEffect(() => {
    if (deleteResponse && deleteResponse.success) {
      dispatch(deleteCheckInAction(checkIn))
      notification.success(...notify('CheckIn deleted successfully.'))
      closeModal()
    }

    if (deleteResponse && !deleteResponse.success) {
      notification.error(...notify(deleteResponse.message))
    }
    // eslint-disable-next-line
  }, [deleteResponse])
  return (
    <div>
      <CheckInForm
        checkIn={checkIn}
        serverFormState={serverFormState}
        handleFormSubmit={handleFormSubmit}
        deleteProps={deleteProps}
      />
    </div>
  )
}

export default CheckInFormContainer
