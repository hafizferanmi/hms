import { Router } from 'express'
import {
  checkIn,
  checkOut,
  updateCheckIn,
  deleteCheckIn,
  getAllCheckIn
} from '../businesslogic/checkIn'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hi to checkIns' }))
router.post('/add', currentStaff, allow(allowedStaff), checkIn)
router.get('/all', currentStaff, allow(allowedStaff), getAllCheckIn)
router.post('/checkOut/:checkInId', currentStaff, allow(allowedStaff), checkOut)
router.put('/update/:checkInId', currentStaff, allow(allowedStaff), updateCheckIn)
router.delete('/delete/:checkInId', currentStaff, allow(), deleteCheckIn)

export default router
