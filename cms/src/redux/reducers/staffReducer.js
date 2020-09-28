import {
  STAFF_LOGIN_ERROR,
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_LOADING
} from '../types/staff'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case STAFF_LOGIN_SUCCESS:
      return {
        ...state,
        data: payload
      }
    case STAFF_LOGIN_ERROR:
      return {
        ...state,
        error: 'Error occured, login failed'
      }
    case STAFF_LOGIN_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
