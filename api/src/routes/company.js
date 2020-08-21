import { Router } from 'express'
import { createCompany, allCompanies } from '../businesslogic/company'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hi to companies' }))
router.post('/create', createCompany)
router.get('/all', allCompanies)

export default router
