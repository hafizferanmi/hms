import { Router } from 'express'
import { staffLogin } from '../businesslogic/auth'
import { getAllStaffs, getStaff, updateStaff, deleteStaff, addStaff } from '../businesslogic/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to staffs route' })
})
router.post('/login', staffLogin)
router.get('/all', currentStaff, allow, getAllStaffs)
router.get('/:staffId', currentStaff, allow, getStaff)
router.put('/update/:staffId', currentStaff, allow, updateStaff)
router.delete('/delete/:staffId', currentStaff, allow, deleteStaff)
router.post('/add', currentStaff, allow, addStaff)

export default router
