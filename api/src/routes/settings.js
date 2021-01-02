import { Router } from 'express'
import { uploadCompanyLogo, updateCompanyInfo } from '../businesslogic/settings'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hello, from company settings' }))
router.post('/uploadLogo', currentStaff, allow([]), uploadCompanyLogo)
router.put('/update/:companyId', currentStaff, allow([]), updateCompanyInfo)

export default router
