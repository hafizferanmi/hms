import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import { store as notification } from 'react-notifications-component'
import { success, failed } from '../../../helpers/notification'
import {
  addHall as addHallAPI,
  updateHall as updateHallAPI,
  deleteHall as deleteHallAPI
} from '../../../helpers/api'
import {
  addHall as addHallAction,
  updateHall as updateHallAction,
  deleteHall as deleteHallAction
} from '../../../redux/actions/halls'
import HallForm from './HallForm'

const HallFormContainer = ({ hall, closeModal }) => {
  const checkInId = hall && hall._id
  const API = hall ? updateHallAPI : addHallAPI

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
      hall ? dispatch(updateHallAction(response.result)) : dispatch(addHallAction(response.result))
      const notificationMessage = hall ? 'Hall updated successfully' : 'Hall added successfully'
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
  } = useAsyncFn(deleteHallAPI)

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
      dispatch(deleteHallAction(deleteResponse.result))
      notification.addNotification(success('Hall deleted successfully.'))
      closeModal()
    }

    if (deleteResponse && !deleteResponse.success) {
      notification.addNotification(failed(deleteResponse.message))
    }
    // eslint-disable-next-line
  }, [deleteResponse])
  return (
    <div>
      <HallForm
        hall={hall}
        serverFormState={serverFormState}
        handleFormSubmit={handleFormSubmit}
        deleteProps={deleteProps}
      />
    </div>
  )
}

export default HallFormContainer
