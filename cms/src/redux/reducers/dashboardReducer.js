import {
  FETCH_DASHBOARD_ERROR,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOOARD_LOADING
} from '../types/dashboard'

const initialState = {
  loading: false,
  error: null,
  data: []
}

const DashboardReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_DASHBOOARD_LOADING:
      return {
        ...state,
        loading: true
      }

    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: payload
      }

    case FETCH_DASHBOARD_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured, could not fetch current dashboard data.'
      }

    default:
      return state
  }
}

export default DashboardReducer
