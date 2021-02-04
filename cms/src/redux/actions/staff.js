import {
  FETCH_STAFF_ERROR,
  FETCH_STAFF_LOADING,
  FETCH_STAFF_SUCCESS,
  ADD_NEW_STAFF,
  UPDATE_STAFF_DETAILS,
  DELETE_STAFF,
  FETCH_CURRENT_STAFF_ERROR,
  FETCH_CURRENT_STAFF_LOADING,
  FETCH_CURRENT_STAFF_SUCCESS,
  SET_PROFILE_IMAGE,
  LOGOUT
} from '../types/staff'

import { getStaffs, getCurrentStaff } from '../../helpers/api'

export const fetchStaffs = () => async (dispatch) => {
  dispatch({
    type: FETCH_STAFF_LOADING
  })

  try {
    const res = await getStaffs()
    dispatch({
      type: FETCH_STAFF_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_STAFF_ERROR
    })
  }
}

export const addNewStaff = (payload) => ({
  type: ADD_NEW_STAFF,
  payload
})

export const updateStaffDetails = (payload) => ({
  type: UPDATE_STAFF_DETAILS,
  payload
})

export const deleteStaff = (payload) => ({
  type: DELETE_STAFF,
  payload
})

export const fetchCurrentStaff = () => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_STAFF_LOADING
  })

  try {
    const res = await getCurrentStaff()
    dispatch(setCurrentStaff(res.result))
  } catch (e) {
    dispatch({
      type: FETCH_CURRENT_STAFF_ERROR
    })
  }
}

export const setCurrentStaff = (payload) => ({
  type: FETCH_CURRENT_STAFF_SUCCESS,
  payload
})

export const setProfileImage = (payload) => ({
  type: SET_PROFILE_IMAGE,
  payload
})

export const logout = () => ({
  type: LOGOUT
})
