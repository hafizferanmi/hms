import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../misc/Loading'
import StaffsPage from './StaffsPage'
import useAsyncFn from '../../hooks/useAsyncFn'
import useNotify from '../../hooks/useNotify'
import useDataProvider from '../../hooks/useDataProvider'
import {
  deleteStaff as deleteStaffAPI
} from '../../helpers/api'
import {
  fetchStaffs,
  deleteStaff as deleteStaffAction
} from '../../redux/actions/staff'

export const StaffPageAPIMethods = React.createContext(null)

const StaffsPageContainer = () => {
  const { Provider } = useDataProvider()
  const dispatch = useDispatch()
  const reduxStaff = useSelector(state => state.staffs)
  const { loading, error, data: staffs } = reduxStaff

  useEffect(() => {
    dispatch(fetchStaffs())
    // eslint-disable-next-line
  }, [])

  const deleteAsyncFn = useAsyncFn(deleteStaffAPI)

  const handleDeleteStaff = (staffId) => {
    deleteAsyncFn.executeFn(staffId)
  }

  const deleteStaffProps = {
    deleteServerState: deleteAsyncFn,
    handleDeleteStaff
  }

  useNotify({ message: 'Staff deleted successfully', response: deleteAsyncFn.response, action: deleteStaffAction })

  if (loading) return <Loading />
  if (error) return 'Error occured, we are on this issue.'

  return (
    <Provider value={deleteStaffProps}>
      <StaffsPage
        staffs={staffs}
      />
    </Provider>
  )
}

export default StaffsPageContainer
