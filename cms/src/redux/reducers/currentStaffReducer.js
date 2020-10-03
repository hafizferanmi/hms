import {
  FETCH_CURRENT_STAFF_ERROR,
  FETCH_CURRENT_STAFF_SUCCESS,
  FETCH_CURRENT_STAFF_LOADING
} from '../types/staff'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_CURRENT_STAFF_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_CURRENT_STAFF_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }
    case FETCH_CURRENT_STAFF_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current staff.'
      }
    default:
      return state
  }
}
