import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardPage from './DashboardPage'
import { fetchAnalytics } from '../../redux/actions/dashboard'
import Loading from '../../components/misc/Loading'

const DashboardPageContainer = () => {
  const dispatch = useDispatch()
  const {
    loading, error, data: analytics
  } = useSelector(state => state.analytics)

  useEffect(() => {
    dispatch(fetchAnalytics())
    // eslint-disable-next-line
  }, [])
  if (loading) return <Loading />
  if (error) return 'Could not fetch analytics data.'

  return (
    <DashboardPage analytics={analytics} />
  )
}

export default DashboardPageContainer
