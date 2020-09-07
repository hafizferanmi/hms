import { Router } from 'express'
import { addRoom, updateRoom, deleteRoom, fetchRoom, fetchRoomsInRoomTypes } from '../businesslogic/room'
import currentStaff from '../middlewares/currentStaff'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hello, from rooms' }))
router.post('/add', currentStaff, addRoom)
router.put('/update/:roomId', currentStaff, updateRoom)
router.delete('/delete/:roomId', currentStaff, deleteRoom)
router.get('/:roomId', currentStaff, fetchRoom)
router.get('/roomType/:roomTypeId', currentStaff, fetchRoomsInRoomTypes)

export default router
