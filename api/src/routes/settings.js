import { Router } from 'express'
import { uploadCompanyLogo, updateCompanyInfo, updateCompanyCurrency } from '../businesslogic/settings'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hello, from company settings' }))
router.post('/uploadLogo', currentStaff, allow([]), uploadCompanyLogo)
router.put('/update/:companyId', currentStaff, allow([]), updateCompanyInfo)
router.put('/update/currency/:companyId', currentStaff, allow([]), updateCompanyCurrency)

export default router
