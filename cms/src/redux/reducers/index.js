import { combineReducers } from 'redux'
import staffReducer from './staffReducer'
import currentStaffReducer from './currentStaffReducer'

export default combineReducers({
  staffs: staffReducer,
  currentStaff: currentStaffReducer
})
