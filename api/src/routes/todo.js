import { Router } from 'express'
import {
  addTodo,
  updateTodo,
  getTodo,
  getAllTodo,
  deleteTodo,
  pinTodo,
  completeTodo
} from '../businesslogic/todo'
import currentStaff from '../middlewares/currentStaff'
import allow from '../middlewares/allowAccess'

const router = Router()

router.get('/', currentStaff, (req, res) => {
  return res.json({ hi: 'Hi to todo route' })
})

router.get('/all', currentStaff, getAllTodo)
router.post('/add', currentStaff, addTodo)
router.get('/:todoId', currentStaff, allow(), getTodo)
router.put('pin/:todoId', currentStaff, allow(), pinTodo)
router.put('complete/:todoId', currentStaff, allow(), completeTodo)
router.put('/update/:todoId', currentStaff, updateTodo)
router.delete('/delete/:todoId', currentStaff, deleteTodo)

export default router
