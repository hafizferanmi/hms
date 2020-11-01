import { Router } from 'express'
import {
  addExpenses,
  updateExpenses,
  getAllExpenses,
  getExpensesByCheckIn,
  getSingleExpense,
  deleteExpense
} from '../businesslogic/guestExpenses'
import currentStaff from '../middlewares/currentStaff'

const router = Router()

router.get('/', (req, res) => res.json({ hi: 'Hi to guest expenses' }))
router.post('/:checkInId/add', currentStaff, addExpenses)
router.put('/:checkInId/update/:expenseId', currentStaff, updateExpenses)
router.get('/:checkInId/all', currentStaff, getExpensesByCheckIn)
router.post('/all', currentStaff, getAllExpenses)
router.get('/:expenseId', currentStaff, getSingleExpense)
router.delete('delete/:expenseId', currentStaff, deleteExpense)

export default router
