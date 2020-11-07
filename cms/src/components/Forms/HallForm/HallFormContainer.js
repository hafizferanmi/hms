import React from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import useNotify from '../../../hooks/useNotify'
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
  const hallId = hall && hall._id
  const API = hall ? updateHallAPI : addHallAPI

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const handleFormSubmit = data => {
    hallId ? submitForm(hallId, data) : submitForm(data)
  }

  useNotify({
    message: hall ? 'Hall updated successfully' : 'Hall added successfully',
    action: hall ? updateHallAction : addHallAction,
    callback: closeModal,
    response
  })

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
    deleteAPI(hallId)
  }

  const deleteProps = {
    deleteServerError,
    deleteProcessing,
    deleteResponse,
    handleDelete
  }

  useNotify({
    message: 'Hall deleted successfully.',
    action: deleteHallAction,
    response: deleteResponse,
    callback: closeModal
  })

  return (
    <HallForm
      hall={hall}
      serverFormState={serverFormState}
      handleFormSubmit={handleFormSubmit}
      deleteProps={deleteProps}
    />
  )
}

export default HallFormContainer
