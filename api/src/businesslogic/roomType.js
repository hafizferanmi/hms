import Debug from 'debug'
import RoomType from '../models/roomTypes'
import Room from '../models/room'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogin/roomType.js')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { RoomTypeSchema } = ValidationSchemas

export const addRoomType = async (req, res) => {
  debug('addRoomType()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const roomTypeData = {
    ...value,
    companyId,
    createdBy: currentStaffId,
    updatedBy: currentStaffId
  }

  try {
    let roomType = new RoomType(roomTypeData)
    roomType = await roomType.save()
    return res.json(success(roomType))
  } catch (e) {
    return res.json(failed('Error Occured, could not create room type.'))
  }
}

export const updateRoomType = async (req, res) => {
  debug('updateRoomType()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const roomTypeId = req.params.roomTypeId
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const roomTypeData = {
    ...value,
    updatedBy: currentStaffId
  }

  try {
    const updatedRoomType = await RoomType.findOneAndUpdate({ _id: roomTypeId, companyId }, roomTypeData, { new: true })
    return res.json(success(updatedRoomType))
  } catch (e) {
    return res.json(failed('Error Occured. Could not update room type.'))
  }
}

export const deleteRoomType = async (req, res) => {
  debug('deleteRoomType()')
  const roomTypeId = req.params.roomTypeId
  const companyId = req.staff.companyId

  if (!roomTypeId) return res.json(failed('Error occured. Invalid roomtype'))

  try {
    const deletedRoomType = RoomType.findOneAndDelete({ _id: roomTypeId, companyId })
    const deleteRoomsOfRoomTypes = Room.deleteMany({ roomTypeId: roomTypeId, companyId })
    const deleted = await Promise.all([deletedRoomType, deleteRoomsOfRoomTypes])
    return res.json(success(deleted[0]))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete room type'))
  }
}

export const getRoomTypes = async (req, res) => {
  debug('getRoomTypes()')
  const companyId = req.staff.companyId

  try {
    const companyRoomTypes = await RoomType.find({ companyId })
    return res.json(success(companyRoomTypes))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getRoomType = async (req, res) => {
  debug('getRoomType()')
  const roomTypeId = req.params.roomTypeId
  const companyId = req.staff.companyId
  try {
    const roomType = await RoomType.findOne({ _id: roomTypeId, companyId })
    const roomTypeRooms = await Room.find({ roomTypeId, companyId })

    const responseDetails = {
      type: roomType,
      rooms: roomTypeRooms
    }
    return res.json(success(responseDetails))
  } catch (e) {
    return res.json(failed('Error occured. Could not get room type details'))
  }
}
