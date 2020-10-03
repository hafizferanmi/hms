import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StaffsPage from './StaffsPage'
import { fetchStaffs } from '../../redux/actions/staff'

const StaffsPageContainer = () => {
  const dispatch = useDispatch()
  const reduxStaff = useSelector(state => state.staffs)
  const { loading, error, data: staffs } = reduxStaff

  useEffect(() => {
    dispatch(fetchStaffs())
    // eslint-disable-next-line
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error occured, we are on this issue.'
  return <StaffsPage staffs={staffs} />
}

export default StaffsPageContainer
