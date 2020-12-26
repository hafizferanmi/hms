import {
  FETCH_HALL_ERROR,
  FETCH_HALL_LOADING,
  FETCH_HALL_SUCCESS,
  ADD_HALL,
  DELETE_HALL,
  UPDATE_HALL
} from '../types/halls'

const initialState = {
  loading: false,
  error: null,
  data: []
}

const HallReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_HALL_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_HALL_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_HALL_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current hall type.'
      }

    case ADD_HALL:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case UPDATE_HALL: {
      const halls = state.data
      const hallIndex = state.data.findIndex(hall => hall._id === payload._id)
      halls.splice(hallIndex, 1, payload)
      return {
        ...state,
        data: halls
      }
    }

    case DELETE_HALL: {
      const filteredHalls = state.data.filter(hall => hall._id !== payload._id)
      return {
        ...state,
        data: filteredHalls
      }
    }

    default:
      return state
  }
}

export default HallReducer
