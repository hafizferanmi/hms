import React from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import useNotify from '../../../hooks/useNotify'
import StaffForm from './StaffForm'
import {
  addStaff as addStaffAPI,
  updateStaff as updateStaffAPI
} from '../../../helpers/api'
import {
  addNewStaff,
  updateStaffDetails
} from '../../../redux/actions/staff'

const StaffFormContainer = ({ closeModal, staff }) => {
  const API = staff ? updateStaffAPI : addStaffAPI

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm
  } = useAsyncFn(API)

  const staffId = staff && staff._id

  const handleFormSubmit = data => {
    staff ? submitForm(staffId, data) : submitForm(data)
  }

  const notificationMessage = staff ? 'Staff details updated successfully.' : 'Staff added successfully.'
  const action = staff ? updateStaffDetails : addNewStaff
  useNotify({ message: notificationMessage, action, response, callback: closeModal })

  const serverFormState = {
    error: serverError,
    submitting,
    message: response && response.message
  }

  return (
    <div>
      <StaffForm
        staff={staff}
        serverFormState={serverFormState}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  )
}

export default StaffFormContainer
