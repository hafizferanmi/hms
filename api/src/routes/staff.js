import { Router } from 'express'
import { staffLogin } from '../businesslogic/auth'
import { getAllStaffs, getStaff, updateStaff, deleteStaff, addStaff } from '../businesslogic/staff'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to staffs route' })
})
router.post('/login', staffLogin)
router.get('/all', getAllStaffs)
router.get('/:staffId', getStaff)
router.get('/update/:staffId', updateStaff)
router.get('/delete/:staffId', deleteStaff)
router.get('/add', addStaff)

export default router
