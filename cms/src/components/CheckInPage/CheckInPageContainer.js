import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckInPage from './CheckInPage'
import useAsyncFn from '../../hooks/useAsyncFn'
import useNotify from '../../hooks/useNotify'
import useDataProvider from '../../hooks/useDataProvider'
import {
  getCheckIns as getCheckInsAPI,
  deleteCheckIn as deleteCheckInAPI,
  checkOut as checkOutAPI
} from '../../helpers/api'
import {
  fetchCheckIns,
  deleteCheckIn as deleteCheckInAction,
  updateCheckIn as updateCheckInAction
} from '../../redux/actions/checkIn'
import Loading from '../misc/Loading'

const CheckInPageContainer = () => {
  const dispatch = useDispatch()
  const { Provider: DataProvider } = useDataProvider()
  const reduxCheckIn = useSelector(state => state.checkIns)
  const { loading, error, data: checkIns } = reduxCheckIn

  useEffect(() => {
    dispatch(fetchCheckIns())
    // eslint-disable-next-line
  }, [])

  const {
    error: deleteError,
    response: deleteCheckInResponse,
    executeFn: deleteCheckIn
  } = useAsyncFn(deleteCheckInAPI)

  const {
    error: checkOutError,
    response: checkOutResponse,
    executeFn: checkOut
  } = useAsyncFn(checkOutAPI)

  const {
    error: filterError,
    loading: filterLoading,
    response: filterResponse,
    executeFn: filterCheckInsByDate
  } = useAsyncFn(getCheckInsAPI)

  const handleDeleteCheckIn = (CheckInId) => {
    deleteCheckIn(CheckInId)
  }

  const handleCheckout = (CheckInId) => {
    checkOut(CheckInId)
  }

  const fetchDataByDate = (startDate, endDate) => {
    filterCheckInsByDate(startDate, endDate)
  }

  useNotify({
    error: deleteError,
    response: deleteCheckInResponse,
    message: 'CheckIn successfully deleted',
    action: deleteCheckInAction
  })

  useNotify({
    response: checkOutResponse,
    error: checkOutError,
    message: 'Checkedout successfully!',
    action: updateCheckInAction
  })

  const [filterResults, setFilterResult] = React.useState()
  const removeDateFilter = () => setFilterResult(null)

  useEffect(() => {
    if (filterResponse && filterResponse.result) {
      setFilterResult(filterResponse.result)
    }
  }, [filterResponse])

  const apiMethods = {
    handleDeleteCheckIn,
    handleCheckout,
    fetchDataByDate,
    removeDateFilter,
    showingDateFilter: !!filterResults
  }

  if (loading || filterLoading) return <Loading />
  if (error || filterError) return 'Error occured, refresh page to continue'

  return (
    <DataProvider value={apiMethods}>
      <CheckInPage
        checkIns={filterResults || checkIns}
      />
    </DataProvider>
  )
}

export default CheckInPageContainer
