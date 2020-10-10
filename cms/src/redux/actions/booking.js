import { getBookings } from '../../helpers/api'
import {
  ADD_BOOKING,
  FETCH_BOOKING_ERROR,
  FETCH_BOOKING_LOADING,
  FETCH_BOOKING_SUCCESS,
  UPDATE_BOOKING,
  DELETE_BOOKING
} from '../types/booking'

export const fetchBookings = () => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKING_LOADING
  })

  try {
    const res = await getBookings()
    dispatch({
      type: FETCH_BOOKING_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_BOOKING_ERROR
    })
  }
}

export const addBooking = (payload) => ({
  type: ADD_BOOKING,
  payload
})

export const updateBooking = (payload) => ({
  type: UPDATE_BOOKING,
  payload
})

export const deleteBooking = (payload) => ({
  type: DELETE_BOOKING,
  payload
})
