import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'

import { fetchCurrentStaff } from '../../../redux/actions/staff'
import AuthRoute from './AuthRoute'

const AuthRouteContainer = () => {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const { error, loading } = useSelector(state => state.currentStaff)
  useEffect(() => {
    dispatch(fetchCurrentStaff())
    // eslint-disable-next-line
  }, [])

  if (loading) return 'Loading current staff'
  if (error) navigateTo('/')
  return (
    <AuthRoute />
  )
}

export default AuthRouteContainer
