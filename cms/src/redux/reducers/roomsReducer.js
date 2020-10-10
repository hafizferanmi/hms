import {
  FETCH_ROOM_ERROR,
  FETCH_ROOM_LOADING,
  FETCH_ROOM_SUCCESS,
  ADD_ROOM,
  DELETE_ROOM,
  UPDATE_ROOM
} from '../types/rooms'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ROOM_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_ROOM_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_ROOM_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current room type.'
      }

    case ADD_ROOM:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case UPDATE_ROOM: {
      const rooms = state.data
      const roomIndex = state.data.findIndex(room => room._id === payload._id)
      rooms.splice(roomIndex, 1, payload)
      return {
        ...state,
        data: rooms
      }
    }

    case DELETE_ROOM: {
      const filteredRooms = state.data.filter(room => room._id !== payload._id)
      return {
        ...state,
        data: filteredRooms
      }
    }

    default:
      return state
  }
}
