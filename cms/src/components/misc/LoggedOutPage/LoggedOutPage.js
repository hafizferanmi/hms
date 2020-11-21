import React from 'react'
import { useNavigate } from '@reach/router'
import { useSelector } from 'react-redux'

const LoggedOutPage = ({ children }) => {
  const navigateTo = useNavigate()
  const currentStaff = useSelector(state => state.currentStaff)

  if (currentStaff && currentStaff.data) {
    navigateTo('/secure')
  }

  if (window.localStorage.getItem('__token')) navigateTo('/secure')

  return (
    <>{children} </>
  )
}

export default LoggedOutPage
