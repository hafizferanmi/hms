import { Router } from 'express'
import {
  getAllStaffs,
  getStaff,
  updateStaff,
  disableStaff,
  deleteStaff,
  addStaff,
  currentStaff as currentLoggedInStaff,
  updateDisplayPicture
} from '../businesslogic/staff'
import {
  staffLogin,
  resetPassword,
  recoverStaffPassword,
  changeStaffPassword
} from '../businesslogic/auth'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', currentStaff, (req, res) => {
  return res.json({ hi: 'Hi to staffs route' })
})
router.post('/login', staffLogin)
router.get('/all', currentStaff, getAllStaffs)
router.get('/currentStaff', currentStaff, currentLoggedInStaff)
router.get('/:staffId', currentStaff, allow(), getStaff)
router.put('/update/:staffId', currentStaff, allow(), updateStaff)
router.put('/disable/:staffId', currentStaff, allow(), disableStaff)
router.delete('/delete/:staffId', currentStaff, allow(), deleteStaff)
router.post('/add', currentStaff, allow(), addStaff)
router.post('/upload-dp', currentStaff, allow(), updateDisplayPicture)
router.post('/recover-password', recoverStaffPassword)
router.post('/reset-password', resetPassword)
router.post('/change-password', currentStaff, changeStaffPassword)

export default router
