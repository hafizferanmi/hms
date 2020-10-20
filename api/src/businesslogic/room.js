import Debug from 'debug'
import Room from '../models/room'
import RoomType from '../models/roomTypes'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'
import { ROOM_STATUS } from '../constants/room'

const debug = Debug('API:businessLogin/room.js')

const { RoomSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc

export const addRoom = async (req, res) => {
  debug('addRoom()')
  const currentStaffId = req.staff._id
  const currentStaffCompanyId = req.staff.companyId

  const { errorMsg, value } = validateRequestBody(RoomSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const { number, desc, roomType: roomTypeId } = value

  try {
    const roomType = await RoomType.findOne({ _id: roomTypeId, companyId: currentStaffCompanyId })
    if (!roomType) return res.json(failed('Roomtype does not belong to company'))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon.'))
  }

  const roomData = {
    number,
    desc,
    roomTypeId,
    companyId: currentStaffCompanyId,
    createdBy: currentStaffId,
    updatedBy: currentStaffId
  }
  try {
    const newRoom = new Room(roomData)
    const room = await newRoom.save()
    return res.json(success(room))
  } catch (e) {
    return res.json(failed('Error occured. Could not create room.'))
  }
}

export const updateRoom = async (req, res) => {
  debug('updateRoom()')
  const currentStaffId = req.staff._id
  const currentStaffCompanyId = req.staff.companyId
  const roomId = req.params.roomId
  const { errorMsg, value } = validateRequestBody(RoomSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))
  const { number, desc, roomType: roomTypeId } = value

  try {
    const roomType = await RoomType.findOne({ _id: roomTypeId, companyId: currentStaffCompanyId })
    if (!roomType) return res.json(failed('Roomtype does not belong to company'))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon.'))
  }

  const roomData = {
    number,
    desc,
    roomTypeId,
    updatedBy: currentStaffId
  }

  const conditions = {
    _id: roomId,
    companyId: currentStaffCompanyId
  }

  try {
    const updatedRoom = await Room.findOneAndUpdate(conditions, roomData, { new: true })
    return res.json(success(updatedRoom))
  } catch (e) {
    return res.json(failed('Error occured. Could not create room.'))
  }
}

export const deleteRoom = async (req, res) => {
  debug('deleteRoom()')
  const currentStaffCompanyId = req.staff.companyId
  const roomId = req.params.roomId

  let room
  try {
    room = await Room.findOne({ _id: roomId, companyId: currentStaffCompanyId })
  } catch (e) {
    return res.json(failed('Error occured. Try again'))
  }

  if (!room) return res.json(failed('Room not found'))
  if (room.status === ROOM_STATUS.BOOKED) return res.json(failed('Room is booked. Cannot delete room.'))

  try {
    const deletedRoom = await Room.findOneAndDelete({ _id: roomId, companyId: currentStaffCompanyId })
    return res.json(success(deletedRoom))
  } catch (e) {
    return res.json(failed('Error occured.'))
  }
}

export const getRoomsInRoomTypes = async (req, res) => {
  debug('getRoomsInRoomTypes()')
  const currentStaffCompanyId = req.staff.companyId
  const roomTypeId = req.params.roomTypeId

  try {
    const rooms = await Room.find({ roomTypeId, companyId: currentStaffCompanyId })
    return res.json(success(rooms))
  } catch (e) {
    return res.json(failed('Could not fetch rooms. Error occured.'))
  }
}

export const getRoom = async (req, res) => {
  debug('getRoom()')
  const currentStaffCompanyId = req.staff.companyId
  const roomId = req.params.roomId
  try {
    const room = await Room.find({ _id: roomId, companyId: currentStaffCompanyId })
    if (!room) return res.json(failed('Room not found.'))
    return res.json(success(room))
  } catch (e) {
    return res.json(failed('Could not fetch room details. Error occured.'))
  }
}

export const getAllRooms = async (req, res) => {
  debug('getAllRooms()')
  const currentStaffCompanyId = req.staff.companyId

  try {
    const rooms = await Room.find({ companyId: currentStaffCompanyId })
    return res.json(success(rooms))
  } catch (e) {
    return res.json(failed('Error occured. Could not get rooms.'))
  }
}
