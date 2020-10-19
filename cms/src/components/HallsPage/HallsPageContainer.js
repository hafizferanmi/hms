import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHalls } from '../../redux/actions/halls'
import Loading from '../misc/Loading'
import HallsPage from './HallsPage'

const HallsPageContainer = () => {
  const dispatch = useDispatch()
  const {
    loading, error, data: halls
  } = useSelector(state => state.halls)

  useEffect(() => {
    dispatch(fetchHalls())
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />
  if (error) return 'Could not fetch halls.'
  return (
    <div>
      <HallsPage halls={halls} />
    </div>
  )
}

export default HallsPageContainer
