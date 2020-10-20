import {
  FETCH_ROOMTYPE_ERROR,
  FETCH_ROOMTYPE_LOADING,
  FETCH_ROOMTYPE_SUCCESS,
  ADD_NEW_ROOMTYPE,
  DELETE_ROOMTYPE,
  UPDATE_ROOMTYPE_DETAILS
} from '../types/roomTypes'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ROOMTYPE_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_ROOMTYPE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_ROOMTYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current room type.'
      }

    case ADD_NEW_ROOMTYPE:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case UPDATE_ROOMTYPE_DETAILS: {
      const roomTypes = state.data
      const index = state.data.findIndex(roomType => roomType._id === payload._id)
      roomTypes.splice(index, 1, payload)
      return {
        ...state,
        data: roomTypes
      }
    }

    case DELETE_ROOMTYPE: {
      const filteredRoomTypes = state.data.filter(roomType => roomType._id !== payload._id)
      return {
        ...state,
        data: filteredRoomTypes
      }
    }

    default:
      return state
  }
}
