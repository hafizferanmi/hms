import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import { store as notification } from 'react-notifications-component'
import StaffForm from './StaffForm'
import {
  addStaff as addStaffAPI,
  updateStaff as updateStaffAPI
} from '../../../helpers/api'
import { success } from '../../../helpers/notification'
import {
  addNewStaff,
  updateStaffDetails
} from '../../../redux/actions/staff'

const StaffFormContainer = ({ closeModal, staff }) => {
  const API = staff ? updateStaffAPI : addStaffAPI

  const dispatch = useDispatch()
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

  useEffect(() => {
    if (response && response.success) {
      staff ? dispatch(updateStaffDetails(response.result)) : dispatch(addNewStaff(response.result))
      const notificationMessage = staff ? 'Staff details updated successfully.' : 'Staff adeed successfully.'
      notification.addNotification(success(notificationMessage))
      closeModal()
    }
    // eslint-disable-next-line
  }, [response])

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
