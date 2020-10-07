import { Router } from 'express'
import {
  addRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRoomsInRoomTypes,
  getAllRooms
} from '../businesslogic/room'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from rooms' }))
router.post('/add', currentStaff, allow(), addRoom)
router.get('/all', currentStaff, allow(), getAllRooms)
router.put('/update/:roomId', currentStaff, allow(), updateRoom)
router.delete('/delete/:roomId', currentStaff, allow(), deleteRoom)
router.get('/:roomId', currentStaff, allow(allowedStaff), getRoom)
router.get('/roomType/:roomTypeId', currentStaff, allow(allowedStaff), getRoomsInRoomTypes)

export default router
