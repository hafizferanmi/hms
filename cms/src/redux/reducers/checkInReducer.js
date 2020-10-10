import {
  FETCH_CHECKIN_ERROR,
  FETCH_CHECKIN_LOADING,
  FETCH_CHECKIN_SUCCESS,
  ADD_CHECKIN,
  DELETE_CHECKIN,
  UPDATE_CHECKIN
} from '../types/checkIn'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_CHECKIN_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_CHECKIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_CHECKIN_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current checkIn.'
      }

    case ADD_CHECKIN:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case UPDATE_CHECKIN: {
      const checkIns = state.data
      const bookingIndex = state.data.findIndex(checkIn => checkIn._id === payload._id)
      checkIns.splice(bookingIndex, 1, payload)
      return {
        ...state,
        data: checkIns
      }
    }

    case DELETE_CHECKIN: {
      const filteredCheckIn = state.data.filter(checkIn => checkIn._id !== payload._id)
      return {
        ...state,
        data: filteredCheckIn
      }
    }

    default:
      return state
  }
}
