import Debug from 'debug'
import Hall from '../model/hall'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/hall.js')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { HallSchema } = ValidationSchemas

export const addHall = async (req, res) => {
  debug('addHall()')
  const currentStaffCompanyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(HallSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc, price, capacity } = value
  const hallData = {
    name,
    desc,
    price,
    capacity,
    companyId: currentStaffCompanyId,
    createdBy: currentStaffId,
    updatedBy: currentStaffId
  }

  try {
    const hall = new Hall(hallData)
    const newHall = await hall.save()
    return res.json(success(newHall))
  } catch (e) {
    return res.json(failed('Error Occured, could not create hall .'))
  }
}

export const updateHall = async (req, res) => {
  debug('updateHall()')
  const currentStaffCompanyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const hallId = req.params.hallId
  const { value, errorMsg } = validateRequestBody(HallSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc, price, capacity } = value

  const conditions = { _id: hallId, companyId: currentStaffCompanyId }

  const hallData = {
    name,
    desc,
    price,
    capacity,
    updatedBy: currentStaffId
  }

  try {
    const updatedHall = await Hall.findOneAndUpdate(conditions, hallData, { new: true })
    return res.json(success(updatedHall))
  } catch (e) {
    return res.json(failed('Error Occured. Could not update hall.'))
  }
}

export const deleteHall = async (req, res) => {
  debug('deleteHall()')
  const hallId = req.params.hallId
  const currentStaffCompanyId = req.staff.companyId

  try {
    const deletedHall = await Hall.findOneAndDelete({ _id: hallId, companyId: currentStaffCompanyId })
    return res.json(success(deletedHall))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete hall'))
  }
}

export const getHalls = async (req, res) => {
  debug('getHalls()')
  const currentStaffCompanyId = req.staff.companyId

  try {
    const companyHalls = await Hall.find({ companyId: currentStaffCompanyId })
    return res.json(success(companyHalls))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getHall = async (req, res) => {
  debug('getHall()')
  const hallId = req.params.hallId
  try {
    const hall = await Hall.findOne({ _id: hallId })
    return res.json(success(hall))
  } catch (e) {
    return res.json(failed('Error occured. Could not get hall details'))
  }
}
