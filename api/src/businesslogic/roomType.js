import Debug from 'debug'
import RoomType from '../models/roomTypes'
import Room from '../models/room'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:BusinessLogic - RoomTypes')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { RoomTypeSchema } = ValidationSchemas

export const addRoomType = async (req, res) => {
  debug('addRoomType()')
  const currentStaffCompanyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc, price } = value
  const roomTypeData = {
    name,
    desc,
    price,
    companyId: currentStaffCompanyId,
    createdBy: currentStaffId,
    updatedBy: currentStaffId
  }

  try {
    const roomType = new RoomType(roomTypeData)
    const newRoomType = await roomType.save()
    return res.json(success(newRoomType))
  } catch (e) {
    return res.json(failed('Error Occured, could not create room type.'))
  }
}

export const updateRoomType = async (req, res) => {
  debug('updateRoomType()')
  const currentStaffCompanyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const roomTypeId = req.params.roomTypeId
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc, price } = value

  const roomTypeData = {
    name,
    desc,
    price,
    updatedBy: currentStaffId
  }

  try {
    const updatedRoomType = await RoomType.findOneAndUpdate({ _id: roomTypeId, companyId: currentStaffCompanyId }, roomTypeData, { new: true })
    return res.json(success(updatedRoomType))
  } catch (e) {
    return res.json(failed('Error Occured. Could not update room type.'))
  }
}

export const deleteRoomType = async (req, res) => {
  debug('deleteRoomType()')
  const roomTypeId = req.params.roomTypeId
  const currentStaffCompanyId = req.staff.companyId

  try {
    const deletedRoomType = await RoomType.findOneAndDelete({ _id: roomTypeId, companyId: currentStaffCompanyId })
    return res.json(success(deletedRoomType))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete room type'))
  }
}

export const getRoomTypes = async (req, res) => {
  debug('getRoomTypes()')
  const currentStaffCompanyId = req.staff.companyId

  try {
    const companyRoomTypes = await RoomType.find({ companyId: currentStaffCompanyId })
    return res.json(success(companyRoomTypes))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getRoomType = async (req, res) => {
  debug('getRoomType()')
  const roomTypeId = req.params.roomTypeId
  try {
    const roomType = await RoomType.findOne({ _id: roomTypeId })
    const roomTypeRooms = await Room.find({ roomTypeId })

    const responseDetails = {
      type: roomType,
      rooms: roomTypeRooms
    }
    return res.json(success(responseDetails))
  } catch (e) {
    return res.json(failed('Error occured. Could not get room type details'))
  }
}
