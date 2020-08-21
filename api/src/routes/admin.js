import { Router } from 'express'
import { adminLogin } from '../businesslogic/auth'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to admin' })
})
router.post('/login', adminLogin)

export default router
