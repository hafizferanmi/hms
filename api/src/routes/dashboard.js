import { Router } from 'express'
import {
  dashboardData
} from '../businesslogic/dashboard'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from dashboard routes' }))
router.get('/analytics', currentStaff, allow(allowedStaff), dashboardData)

export default router
