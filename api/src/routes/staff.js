import { Router } from 'express'
import { staffLogin } from '../businesslogic/auth'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to staffs route' })
})
router.post('/login', staffLogin)

export default router
