import { Router } from 'express'
import { uploadCompanyLogo } from '../businesslogic/settings'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hello, from settings' }))
router.post('/uploadLogo', currentStaff, allow([]), uploadCompanyLogo)

export default router
