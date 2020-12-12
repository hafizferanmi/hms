import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from '../../redux/actions/rooms'
import Loading from '../misc/Loading'
import RoomsPage from './RoomsPage'

const RoomsPageContainer = () => {
  const dispatch = useDispatch()
  const {
    loading, error, data: rooms
  } = useSelector(state => state.rooms)
  const { data: roomTypes } = useSelector(state => state.roomTypes)

  useEffect(() => {
    if (!rooms.length) dispatch(fetchRooms())
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />
  if (error) return 'Could not fetch room types.'

  return (
    <div>
      <RoomsPage rooms={rooms} roomTypes={roomTypes} />
    </div>
  )
}

export default RoomsPageContainer
