import React, { useEffect } from 'react'
import useAsyncFn from '../../../hooks/useAsyncFn'
import { useDispatch } from 'react-redux'
import notification from 'cogo-toast'
import StaffForm from './StaffForm'
import {
  addStaff as addStaffAPI,
  updateStaff as updateStaffAPI
} from '../../../helpers/api'
import ErrorMessage from '../../misc/ErrorMessage'
import { notify } from '../../../helpers/notification'
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
      const notificationMessage = staff ? 'Staff details updated successfully.' : 'Staff added successfully.'
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
