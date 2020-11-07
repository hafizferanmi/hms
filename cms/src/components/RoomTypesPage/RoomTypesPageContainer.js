import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RoomTypesPage from './RoomTypesPageOld'
import { fetchRoomTypes } from '../../redux/actions/roomTypeAction'
import Loading from '../misc/Loading'

const RoomTypesPageContainer = () => {
  const dispatch = useDispatch()
  const {
    loading, error, data
  } = useSelector(state => state.roomTypes)

  useEffect(() => {
    if (!data.length) dispatch(fetchRoomTypes())
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />
  if (error) return 'Could not fetch room types.'
  return (
    <div>
      <RoomTypesPage
        roomTypes={data}
      />
    </div>
  )
}

export default RoomTypesPageContainer
