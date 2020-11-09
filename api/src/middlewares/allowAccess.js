import helpers from '../helpers'
import { STAFF_ROLES } from '../constants/staff'
import Debug from 'debug'

const debug = Debug('API:middlewares/allowAccess.js')
const { failed } = helpers.response
const { GENERAL_MANAGER, OWNER } = STAFF_ROLES
const management = [GENERAL_MANAGER, OWNER]

const allow = (roles = []) => {
  // debug('allowAccess')
  return (req, res, next) => {
    const currentStaffRole = req.staff.role
    debug(currentStaffRole)
    if (management.includes(currentStaffRole)) {
      next()
    } else {
      if (!roles.includes(currentStaffRole)) {
        return res.json(failed('Unauthorized to perform operation...'))
      } else {
        next()
      }
    }
  }
}

export default allow
