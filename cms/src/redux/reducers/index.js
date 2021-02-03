import { combineReducers } from 'redux'
import staffReducer from './staffReducer'
import currentStaffReducer from './currentStaffReducer'
import roomTypeReducer from './roomTypeReducer'
import roomReducer from './roomsReducer'
import checkInReducer from './checkInReducer'
import hallsReducer from './hallsReducrer'
import dashboardReducer from './dashboardReducer'

export default combineReducers({
  staffs: staffReducer,
  currentStaff: currentStaffReducer,
  roomTypes: roomTypeReducer,
  rooms: roomReducer,
  checkIns: checkInReducer,
  halls: hallsReducer,
  analytics: dashboardReducer
})
