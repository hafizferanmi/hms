import { Router } from 'express'
import {
  addEmailTemplate,
  updateEmailTemplate,
  deleteEmailTemplate,
  getEmailTemplate,
  getEmailTemplates
} from '../businesslogic/emailTemplate'
import { STAFF_ROLES } from '../constants/staff'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()
const { FRONT_DESK_OFFICER } = STAFF_ROLES
const allowedStaff = [FRONT_DESK_OFFICER]

router.get('/', (req, res) => res.json({ hi: 'Hello, from email templates' }))
router.post('/add', currentStaff, allow(), addEmailTemplate)
router.get('/all', currentStaff, allow(), getEmailTemplates)
router.put('/update/:templateId', currentStaff, allow(), updateEmailTemplate)
router.delete('/delete/:templateId', currentStaff, allow(), deleteEmailTemplate)
router.get('/:templateId', currentStaff, allow(allowedStaff), getEmailTemplate)

export default router
