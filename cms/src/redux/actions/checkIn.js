import { getCheckIns } from '../../helpers/api'
import {
  ADD_CHECKIN,
  FETCH_CHECKIN_ERROR,
  FETCH_CHECKIN_LOADING,
  FETCH_CHECKIN_SUCCESS,
  UPDATE_CHECKIN,
  DELETE_CHECKIN
} from '../types/checkIn'

export const fetchCheckIns = () => async (dispatch) => {
  dispatch({
    type: FETCH_CHECKIN_LOADING
  })

  try {
    const res = await getCheckIns()
    dispatch({
      type: FETCH_CHECKIN_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_CHECKIN_ERROR
    })
  }
}

export const addCheckIn = (payload) => ({
  type: ADD_CHECKIN,
  payload
})

export const updateCheckIn = (payload) => ({
  type: UPDATE_CHECKIN,
  payload
})

export const deleteCheckIn = (payload) => ({
  type: DELETE_CHECKIN,
  payload
})
