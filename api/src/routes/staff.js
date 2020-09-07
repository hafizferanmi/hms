import { Router } from 'express'
import { staffLogin } from '../businesslogic/auth'
import { getAllStaffs, getStaff, updateStaff, deleteStaff, addStaff } from '../businesslogic/staff'
import currentStaff from '../middlewares/currentStaff'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to staffs route' })
})
router.post('/login', staffLogin)
router.get('/all', currentStaff, getAllStaffs)
router.get('/:staffId', currentStaff, getStaff)
router.put('/update/:staffId', currentStaff, updateStaff)
router.delete('/delete/:staffId', currentStaff, deleteStaff)
router.post('/add', currentStaff, addStaff)

export default router
