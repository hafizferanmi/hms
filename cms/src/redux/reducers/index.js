import { combineReducers } from 'redux'
import staffReducer from './staffReducer'
import currentStaffReducer from './currentStaffReducer'
import roomTypeReducer from './roomTypeReducer'

export default combineReducers({
  staffs: staffReducer,
  currentStaff: currentStaffReducer,
  roomTypes: roomTypeReducer
})
