import helpers from '../helpers'
import { STAFF_ROLES } from '../constants/staff'

const { failed } = helpers.response
const { GENERAL_MANAGER, OWNER } = STAFF_ROLES
const management = [GENERAL_MANAGER, OWNER]

const allow = (roles = []) => {
  return (req, res, next) => {
    const currentStaffRole = req.staff.role
    if (management.includes(currentStaffRole)) next()
    if (roles.includes(currentStaffRole)) {
      return res.json(failed('Unauthorized to perform operation.'))
    } else {
      next()
    }
  }
}

export default allow
