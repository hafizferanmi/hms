import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms, deleteRoom as deleteRoomAction } from '../../redux/actions/rooms'
import Loading from '../misc/Loading'
import RoomsPage from './RoomsPage'
import useNotify from '../../hooks/useNotify'
import useDataProvider from '../../hooks/useDataProvider'
import useAsyncFn from '../../hooks/useAsyncFn'
import {
  deleteRoom as deleteRoomAPI,
  deleteRoomType as deleteRoomTypeAPI
} from '../../helpers/api'
import { deleteRoomType as deleteRoomTypeAction } from '../../redux/actions/roomTypeAction'

const RoomsPageContainer = () => {
  const { Provider: DataProvider } = useDataProvider()
  const dispatch = useDispatch()
  const {
    loading, error, data: rooms
  } = useSelector(state => state.rooms)
  const { data: roomTypes } = useSelector(state => state.roomTypes)

  const {
    error: deleteRoomError,
    response: deleteRoomResponse,
    executeFn: deleteRoom
  } = useAsyncFn(deleteRoomAPI)

  const {
    error: deleteRoomTypeError,
    response: deleteRoomTypeResponse,
    executeFn: deleteRoomType
  } = useAsyncFn(deleteRoomTypeAPI)

  useNotify({
    error: deleteRoomError,
    response: deleteRoomResponse,
    message: 'Room successfully deleted',
    action: deleteRoomAction
  })

  useNotify({
    error: deleteRoomTypeError,
    response: deleteRoomTypeResponse,
    message: 'Room type successfully deleted',
    action: deleteRoomTypeAction
  })

  const handleDeleteRoom = (roomId) => {
    deleteRoom(roomId)
  }

  const handleDeleteRoomType = (roomTypeId) => {
    deleteRoomType(roomTypeId)
  }

  const apiMethods = {
    handleDeleteRoom,
    handleDeleteRoomType
  }

  useEffect(() => {
    dispatch(fetchRooms())
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />
  if (error) return 'Could not fetch rooms.'

  return (
    <DataProvider value={apiMethods}>
      <RoomsPage rooms={rooms} roomTypes={roomTypes} />
    </DataProvider>
  )
}

export default RoomsPageContainer
