import { getAllRoomsAndRoomTypes } from '../../helpers/api'
import {
  ADD_ROOM,
  FETCH_ROOM_ERROR,
  FETCH_ROOM_LOADING,
  FETCH_ROOM_SUCCESS,
  UPDATE_ROOM,
  DELETE_ROOM
} from '../types/rooms'
import { FETCH_ROOMTYPE_SUCCESS } from '../types/roomTypes'

export const fetchRooms = () => async (dispatch) => {
  dispatch({
    type: FETCH_ROOM_LOADING
  })

  try {
    const res = await getAllRoomsAndRoomTypes()
    const { roomTypes, rooms } = res.result
    dispatch({
      type: FETCH_ROOM_SUCCESS,
      payload: rooms
    })
    dispatch({
      type: FETCH_ROOMTYPE_SUCCESS,
      payload: roomTypes
    })
  } catch (e) {
    dispatch({
      type: FETCH_ROOM_ERROR
    })
  }
}

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload
})

export const updateRoom = (payload) => ({
  type: UPDATE_ROOM,
  payload
})

export const deleteRoom = (payload) => ({
  type: DELETE_ROOM,
  payload
})
