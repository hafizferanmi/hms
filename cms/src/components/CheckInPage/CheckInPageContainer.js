import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store as notification } from 'react-notifications-component'
import CheckInPage from './CheckInPage'
import useAsyncFn from '../../hooks/useAsyncFn'
import {
  deleteCheckIn as deleteCheckInAPI
} from '../../helpers/api'
import { success, failed } from '../../helpers/notification'
import {
  fetchCheckIns,
  deleteCheckIn as deleteCheckInAction
} from '../../redux/actions/checkIn'
import Loading from '../misc/Loading'

export const ChekinPageAPIMethods = React.createContext(null)

const CheckInPageContainer = () => {
  const dispatch = useDispatch()
  const reduxCheckIn = useSelector(state => state.checkIns)
  const { loading, error, data: checkIns } = reduxCheckIn

  useEffect(() => {
    dispatch(fetchCheckIns())
    // eslint-disable-next-line
  }, [])

  const {
    error: deleteCheckInServerError,
    loading: deleteCheckInProcessing,
    response: deleteCheckInResponse,
    executeFn: deleteCheckIn
  } = useAsyncFn(deleteCheckInAPI)

  const handleDeleteCheckIn = (CheckInId) => {
    deleteCheckIn(CheckInId)
  }

  const deleteCheckInProps = {
    deleteCheckInServerError,
    deleteCheckInResponse,
    deleteCheckInProcessing,
    handleDeleteCheckIn
  }

  useEffect(() => {
    if (deleteCheckInResponse && deleteCheckInResponse.success) {
      dispatch(deleteCheckInAction(deleteCheckInResponse.result))
      notification.addNotification(success('Checkin successfully deleted.'))
    } else if (deleteCheckInResponse && !deleteCheckInResponse.success) {
      notification.addNotification(failed(deleteCheckInResponse.message))
    }
    // eslint-disable-next-line
  }, [deleteCheckInResponse])

  if (loading) return <Loading />
  if (error) return 'Error occured, we are on this issue.'

  return (
    <ChekinPageAPIMethods.Provider value={deleteCheckInProps}>
      <CheckInPage checkIns={checkIns} />
    </ChekinPageAPIMethods.Provider>
  )
}

export default CheckInPageContainer
