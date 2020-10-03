import React, { useEffect } from 'react'
import useAsyncFn from '../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import StaffForm from './StaffForm'
import {
  addStaff as addStaffAPI,
  updateStaff as updateStaffAPI,
  deleteStaff as deleteStaffAPI
} from '../../helpers/api'
import {
  addNewStaff,
  updateStaffDetails,
  deleteStaff as deleteStaffAction
} from '../../redux/actions/staff'

const StaffFormContainer = ({ closeModal, staff }) => {
  const serverAction = staff ? updateStaffAPI : addStaffAPI

  const dispatch = useDispatch()
  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(serverAction)

  const staffId = staff._id

  const submitStaffForm = data => {
    staff ? submitForm(staffId, data) : submitForm(data)
  }

  useEffect(() => {
    if (response && response.success) {
      staff ? dispatch(updateStaffDetails(response.result)) : dispatch(addNewStaff(response.result))
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
    error: deleteStaffServerError,
    loading: deleteStaffProcessing,
    response: deleteStaffResponse,
    executeFn: deleteStaff
  } = useAsyncFn(deleteStaffAPI)

  const handleDeleteStaff = () => {
    deleteStaff(staffId)
  }

  const deleteStaffProps = {
    deleteStaffServerError,
    deleteStaffResponse,
    deleteStaffProcessing,
    handleDeleteStaff
  }

  useEffect(() => {
    if (deleteStaffResponse && deleteStaffResponse.success) {
      dispatch(deleteStaffAction(staff))
      closeModal()
    }
    // eslint-disable-next-line
  }, [deleteStaffResponse])

  return (
    <div>
      <StaffForm
        staff={staff}
        serverFormState={serverFormState}
        submitForm={submitStaffForm}
        deleteStaffProps={deleteStaffProps}
      />
    </div>
  )
}

export default StaffFormContainer
