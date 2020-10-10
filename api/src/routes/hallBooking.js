import { Router } from 'express'
import {
  addBooking,
  updateBooking,
  deleteBooking,
  getBooking,
  getBookings
} from '../businesslogic/hallBooking'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from hall bookings' }))
router.post('/add', currentStaff, allow(), addBooking)
router.get('/all', currentStaff, allow(), getBookings)
router.put('/update/:bookingId', currentStaff, allow(), updateBooking)
router.delete('/delete/:bookingId', currentStaff, allow(), deleteBooking)
router.get('/:bookingId', currentStaff, allow(allowedStaff), getBooking)

export default router
