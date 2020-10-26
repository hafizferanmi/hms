import LoggedOutRoute from './LoggedOutRoute'
import React from 'react'
import { useNavigate } from '@reach/router'
import { useSelector } from 'react-redux'

const LoggedOutRouteContainer = () => {
  const navigateTo = useNavigate()
  const currentStaff = useSelector(state => state.currentStaff)

  if (currentStaff && currentStaff.data) navigateTo('/secure')
  return (
    <LoggedOutRoute />
  )
}

export default LoggedOutRouteContainer
