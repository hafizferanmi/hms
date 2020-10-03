import {
  FETCH_STAFF_ERROR,
  FETCH_STAFF_LOADING,
  FETCH_STAFF_SUCCESS,
  ADD_NEW_STAFF,
  DELETE_STAFF,
  UPDATE_STAFF_DETAILS
} from '../types/staff'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }
    case FETCH_STAFF_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error occured, Could not fetch staffs.'
      }
    case FETCH_STAFF_LOADING:
      return {
        ...state,
        loading: true
      }
    case ADD_NEW_STAFF:
      return {
        ...state,
        data: [...state.data, payload]
      }
    case UPDATE_STAFF_DETAILS: {
      const staffs = state.data
      const currentStaffIndex = state.data.findIndex(staff => staff._id === payload._id)
      staffs.splice(currentStaffIndex, 1, payload)
      return {
        ...state,
        data: staffs
      }
    }
    case DELETE_STAFF: {
      const filteredStaffs = state.data.filter(staff => staff._id !== payload._id)
      return {
        ...state,
        data: filteredStaffs
      }
    }
    default:
      return state
  }
}
