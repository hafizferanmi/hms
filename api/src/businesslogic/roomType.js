import RoomType from '../models/roomTypes'
import Room from '../models/room'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'
import { authorizeBeforeOperation } from './authorization'

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { RoomTypeSchema } = ValidationSchemas

export const addRoomType = async (req, res) => {
  const currentStaffCompanyId = req.staff.companyId
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc } = value

  // Todo: check if current user is admin

  try {
    const roomTypeData = { name, desc, companyId: currentStaffCompanyId }
    const roomType = new RoomType(roomTypeData)
    const newRoomType = await roomType.save()
    return res.json(success(newRoomType))
  } catch (e) {
    return res.json(failed('Error Occured, could not create room type.'))
  }
}

export const updateRoomType = async (req, res) => {
  await authorizeBeforeOperation(req, res)
  const { value, errorMsg } = validateRequestBody(RoomTypeSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, desc } = value

  try {
    const roomTypeId = req.params.roomTypeId
    const updatedRoomType = await RoomType.findOneAndUpdate({ _id: roomTypeId }, { name, desc }, { new: true })
    return res.json(success(updatedRoomType))
  } catch (e) {
    return res.json(failed('Error Occured. Could not update room type.'))
  }
}

export const deleteRoomType = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  try {
    const roomTypeId = req.params.roomTypeId
    const deletedRoomType = await RoomType.deleteOne({ _id: roomTypeId })
    return res.json(success(deletedRoomType))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete room type'))
  }
}

export const getRoomTypes = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  try {
    const currentStaffCompanyId = req.staff.company
    const companyRoomTypes = await RoomType.find({ companyId: currentStaffCompanyId })
    return res.json(success(companyRoomTypes))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getRoomType = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const roomTypeId = req.params.roomTypeId
  try {
    const roomType = await RoomType.find({ _id: roomTypeId })
    const roomTypeRooms = await Room.find({ roomTypeId })

    const responseDetails = {
      ...roomType,
      rooms: roomTypeRooms
    }
    return res.json(success(responseDetails))
  } catch (e) {
    return res.json(failed('Error occured. Could not get room type details'))
  }
}
