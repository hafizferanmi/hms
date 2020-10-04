import { getAllRoomTypes } from '../../helpers/api'
import {
  ADD_NEW_ROOMTYPE,
  FETCH_ROOMTYPE_ERROR,
  FETCH_ROOMTYPE_LOADING,
  FETCH_ROOMTYPE_SUCCESS,
  UPDATE_ROOMTYPE_DETAILS,
  DELETE_ROOMTYPE
} from '../types/roomTypes'

export const fetchRoomTypes = () => async (dispatch) => {
  dispatch({
    type: FETCH_ROOMTYPE_LOADING
  })

  try {
    const res = await getAllRoomTypes()
    dispatch({
      type: FETCH_ROOMTYPE_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_ROOMTYPE_ERROR
    })
  }
}

export const addRoomType = (payload) => ({
  type: ADD_NEW_ROOMTYPE,
  payload
})

export const updateRoomType = (payload) => ({
  type: UPDATE_ROOMTYPE_DETAILS,
  payload
})

export const deleteRoomType = (payload) => ({
  type: DELETE_ROOMTYPE,
  payload
})
