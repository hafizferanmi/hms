import Debug from 'debug'
import Todo from '../models/todo'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businessLogic/todo.js')

const { TodoSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc

export const addTodo = async (req, res) => {
  debug('addTodo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  const { value, errorMsg } = validateRequestBody(TodoSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const todoDetails = {
    ...value,
    createdBy: staffId,
    companyId
  }

  try {
    const todo = new Todo(todoDetails)
    return res.json(success(todo))
  } catch (e) {
    return res.json(failed('Error occured. Could not create todo'))
  }
}

export const updateTodo = async (req, res) => {
  debug('updateTodo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id
  const todoId = req.params.todoId

  const { value, errorMsg } = validateRequestBody(TodoSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const todoDetails = {
    ...value,
    updatedBy: staffId,
    companyId
  }

  try {
    const todo = await Todo.findOneAndUpdate({ companyId, todoId }, todoDetails, { new: true })
    return res.json(success(todo))
  } catch (e) {
    return res.json(failed('Error occured. Could not update todo'))
  }
}

export const getAllTodo = async (req, res) => {
  debug('getAllTodo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  // Todo: filter todos by different search criterias

  try {
    const todos = await Todo.find({ companyId, createdBy: staffId })
    return res.json(success(todos))
  } catch (e) {
    return res.json(failed('Error occured. Could not get todos'))
  }
}

export const getTodo = async (req, res) => {
  debug('getTodo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id
  const todoId = req.params.todoId

  try {
    const todos = await Todo.find({ companyId, createdBy: staffId, _id: todoId })
    return res.json(success(todos))
  } catch (e) {
    return res.json(failed('Error occured. Could not get todo'))
  }
}

export const deleteTodo = async (req, res) => {
  debug('deleteTodo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id
  const todoId = req.params.todoId

  try {
    const todos = await Todo.findOneAndDelete({ companyId, createdBy: staffId, _id: todoId })
    return res.json(success(todos))
  } catch (e) {
    return res.json(failed('Error occured. Could not get todo'))
  }
}
