import { getHalls } from '../../helpers/api'
import {
  ADD_HALL,
  FETCH_HALL_ERROR,
  FETCH_HALL_LOADING,
  FETCH_HALL_SUCCESS,
  UPDATE_HALL,
  DELETE_HALL
} from '../types/halls'

export const fetchHalls = () => async (dispatch) => {
  dispatch({
    type: FETCH_HALL_LOADING
  })

  try {
    const res = await getHalls()
    dispatch({
      type: FETCH_HALL_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_HALL_ERROR
    })
  }
}

export const addHall = (payload) => ({
  type: ADD_HALL,
  payload
})

export const updateHall = (payload) => ({
  type: UPDATE_HALL,
  payload
})

export const deleteHall = (payload) => ({
  type: DELETE_HALL,
  payload
})
