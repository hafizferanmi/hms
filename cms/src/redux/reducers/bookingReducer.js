import {
  FETCH_BOOKING_ERROR,
  FETCH_BOOKING_LOADING,
  FETCH_BOOKING_SUCCESS,
  ADD_BOOKING,
  DELETE_BOOKING,
  UPDATE_BOOKING
} from '../types/booking'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_BOOKING_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_BOOKING_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_BOOKING_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current booking.'
      }

    case ADD_BOOKING:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case UPDATE_BOOKING: {
      const bookings = state.data
      const bookingIndex = state.data.findIndex(booking => booking._id === payload._id)
      bookings.splice(bookingIndex, 1, payload)
      return {
        ...state,
        data: bookings
      }
    }

    case DELETE_BOOKING: {
      const filteredBookings = state.data.filter(booking => booking._id !== payload._id)
      return {
        ...state,
        data: filteredBookings
      }
    }

    default:
      return state
  }
}
