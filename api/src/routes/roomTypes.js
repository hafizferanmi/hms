import { Router } from 'express'
import { addRoomType, updateRoomType, deleteRoomType, getRoomTypes, getRoomType } from '../businesslogic/roomType'
import currentStaff from '../middlewares/currentStaff'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hello, from rooms' }))
router.post('/add', currentStaff, addRoomType)
router.put('/update/:roomTypeId', currentStaff, updateRoomType)
router.delete('/delete/:roomTypeId', currentStaff, deleteRoomType)
router.get('/:roomTypeId', currentStaff, getRoomType)
router.get('/all/', currentStaff, getRoomTypes)

export default router
