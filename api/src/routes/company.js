import { Router } from 'express'
import { createCompany, allCompanies } from '../businesslogic/company'
import currentAdmin from '../middlewares/currentAdmin'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hi to companies' }))
router.post('/create', currentAdmin, createCompany)
router.get('/all', currentAdmin, allCompanies)

export default router
