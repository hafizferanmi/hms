import { Router } from 'express'
import { addRoomType, updateRoomType, deleteRoomType, getRoomTypes, getRoomType } from '../businesslogic/roomType'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'
import { STAFF_ROLES } from '../constants/staff'

const router = Router()
const allowedStaff = [STAFF_ROLES.FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from room types' }))
router.post('/add', currentStaff, allow([]), addRoomType)
router.put('/update/:roomTypeId', currentStaff, allow([]), updateRoomType)
router.delete('/delete/:roomTypeId', currentStaff, allow([]), deleteRoomType)
router.get('/all', currentStaff, allow(allowedStaff), getRoomTypes)
router.get('/:roomTypeId', currentStaff, allow(allowedStaff), getRoomType)

export default router
