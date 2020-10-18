import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store as notification } from 'react-notifications-component'
import Loading from '../misc/Loading'
import StaffsPage from './StaffsPage'
import useAsyncFn from '../../hooks/useAsyncFn'
import {
  deleteStaff as deleteStaffAPI
} from '../../helpers/api'
import { success, failed } from '../../helpers/notification'
import {
  fetchStaffs,
  deleteStaff as deleteStaffAction
} from '../../redux/actions/staff'

export const StaffPageAPIMethods = React.createContext(null)

const StaffsPageContainer = () => {
  const dispatch = useDispatch()
  const reduxStaff = useSelector(state => state.staffs)
  const { loading, error, data: staffs } = reduxStaff

  useEffect(() => {
    dispatch(fetchStaffs())
    // eslint-disable-next-line
  }, [])

  const {
    error: deleteStaffServerError,
    loading: deleteStaffProcessing,
    response: deleteStaffResponse,
    executeFn: deleteStaff
  } = useAsyncFn(deleteStaffAPI)

  const handleDeleteStaff = (staffId) => {
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
      dispatch(deleteStaffAction(deleteStaffResponse.result))
      notification.addNotification(success('Staff successfully deleted.'))
    } else if (deleteStaffResponse && !deleteStaffResponse.success) {
      notification.addNotification(failed(deleteStaffResponse.message))
    }
    // eslint-disable-next-line
  }, [deleteStaffResponse])

  if (loading) return <Loading />
  if (error) return 'Error occured, we are on this issue.'

  return (
    <StaffPageAPIMethods.Provider value={deleteStaffProps}>
      <StaffsPage
        staffs={staffs}
      />
    </StaffPageAPIMethods.Provider>
  )
}

export default StaffsPageContainer
