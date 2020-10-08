import { Router } from 'express'
import {
  addHall,
  updateHall,
  deleteHall,
  getHall,
  getHalls
} from '../businesslogic/hall'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from halls' }))
router.post('/add', currentStaff, allow(), addHall)
router.get('/all', currentStaff, allow(), getHalls)
router.put('/update/:hallId', currentStaff, allow(), updateHall)
router.delete('/delete/:hallId', currentStaff, allow(), deleteHall)
router.get('/:hallId', currentStaff, allow(allowedStaff), getHall)

export default router
