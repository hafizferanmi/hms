import { Router } from 'express'
import {
  addRoom,
  updateRoom,
  deleteRoom,
  fetchRoom,
  fetchRoomsInRoomTypes,
  checkIn,
  checkOut
} from '../businesslogic/room'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const management = []
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from rooms' }))
router.post('/add', currentStaff, allow(management), addRoom)
router.put('/update/:roomId', currentStaff, allow(management), updateRoom)
router.delete('/delete/:roomId', currentStaff, allow(management), deleteRoom)
router.get('/:roomId', currentStaff, allow(allowedStaff), fetchRoom)
router.get('/roomType/:roomTypeId', currentStaff, allow(allowedStaff), fetchRoomsInRoomTypes)
router.post('/checkIn/:roomId', currentStaff, allow(allowedStaff), checkIn)
router.post('/checkOut/:roomId', currentStaff, allow(allowedStaff), checkOut)

export default router
