import {
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOOARD_LOADING,
  FETCH_DASHBOARD_ERROR
} from '../types/dashboard'

import { getAnalytics } from '../../helpers/api'

export const fetchAnalytics = () => async (dispatch) => {
  dispatch({
    type: FETCH_DASHBOOARD_LOADING
  })

  try {
    const res = await getAnalytics()
    dispatch({
      type: FETCH_DASHBOARD_SUCCESS,
      payload: res.result
    })
  } catch (e) {
    dispatch({
      type: FETCH_DASHBOARD_ERROR
    })
  }
}
