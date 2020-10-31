import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'
import ReactLoading from 'react-loading'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import { STAFF_ROLE_ROUTE } from '../../../constants/staff'

import { fetchCurrentStaff } from '../../../redux/actions/staff'
import AuthRoute from './AuthRoute'

const useStyles = makeStyles({
  loadingBox: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const AuthRouteContainer = () => {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const classess = useStyles()
  const { error, loading, data: currentStaff } = useSelector(state => state.currentStaff)
  useEffect(() => {
    dispatch(fetchCurrentStaff())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (currentStaff && currentStaff.role) navigateTo(STAFF_ROLE_ROUTE[currentStaff.role])
    // eslint-disable-next-line
  }, [currentStaff])

  if (loading) {
    return (
      <Box className={classess.loadingBox}>
        <ReactLoading color='lightblue' />
      </Box>
    )
  }
  if (error) navigateTo('/')
  return (
    <AuthRoute />
  )
}

export default AuthRouteContainer
