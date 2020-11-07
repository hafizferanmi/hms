import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../misc/Loading'
import StaffsPage from './StaffsPage'
import useAsyncFn from '../../hooks/useAsyncFn'
import useNotify from '../../hooks/useNotify'
import useDataProvider from '../../hooks/useDataProvider'
import {
  deleteStaff as deleteStaffAPI,
  disableStaff as disableStaffAPI
} from '../../helpers/api'
import {
  fetchStaffs,
  updateStaffDetails as updateStaffAction,
  deleteStaff as deleteStaffAction
} from '../../redux/actions/staff'

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
  const disableStaffAsynFn = useAsyncFn(disableStaffAPI)

  const handleDeleteStaff = (staffId) => {
    deleteAsyncFn.executeFn(staffId)
  }

  const [selectedStaff, setSelectedStaff] = React.useState(null)
  const handleDisableStaff = (staff) => {
    const staffId = staff._id
    setSelectedStaff(staff)
    disableStaffAsynFn.executeFn(staffId, { disabled: !staff.disabled })
  }

  const providerValues = {
    handleDeleteStaff,
    handleDisableStaff
  }

  const disableMessage = selectedStaff && selectedStaff.disabled ? 'Staff enabled successfully' : 'Staff disabled successfully'

  useNotify({ message: 'Staff deleted successfully', response: deleteAsyncFn.response, action: deleteStaffAction })
  useNotify({ message: disableMessage, response: disableStaffAsynFn.response, action: updateStaffAction })

  if (loading) return <Loading />
  if (error) return 'Error occured, we are on this issue.'

  return (
    <Provider value={providerValues}>
      <StaffsPage
        staffs={staffs}
      />
    </Provider>
  )
}

export default StaffsPageContainer
