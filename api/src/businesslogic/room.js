import Room from '../models/room'
import CheckIn from '../models/checkIn'
import helpers from '../helpers'
import { authorizeBeforeOperation } from './authorization'
import ValidationSchemas from '../ValidationSchemas'
import { ROOM_STATUS } from '../constants/room'

const { RoomSchema, CheckInSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc

export const addRoom = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const { errorMsg, value } = validateRequestBody(RoomSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))
  const { name, desc, roomType } = value

  const roomData = {
    name, desc, roomTypeId: roomType
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
  await authorizeBeforeOperation(req, res)
  const roomId = req.params.roomId
  const { errorMsg, value } = validateRequestBody(RoomSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))
  const { name, desc, roomType } = value

  const roomData = {
    name, desc, roomTypeId: roomType
  }
  try {
    const updatedRoom = await Room.updateOne({ _id: roomId }, roomData, { new: true })
    return res.json(success(updatedRoom))
  } catch (e) {
    return res.json(failed('Error occured. Could not create room.'))
  }
}

export const deleteRoom = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const roomId = req.params.roomId
  try {
    const deletedRoom = await Room.deleteOne({ _id: roomId })
    return res.json(success(deletedRoom))
  } catch (e) {
    return res.json(failed('Error occured.'))
  }
}

export const fetchRoomsInRoomTypes = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const roomTypeId = req.params.roomTypeId

  try {
    const rooms = Room.find({ roomTypeId })
    return res.json(success(rooms))
  } catch (e) {
    return res.json(failed('Could not fetch rooms. Error occured.'))
  }
}

export const fetchRoom = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const roomId = req.params.roomId
  try {
    const room = Room.find({ _id: roomId })
    return res.json(success(room))
  } catch (e) {
    return res.json(failed('Could not fetch room details. Error occured.'))
  }
}

export const checkIn = async (req, res) => {
  await authorizeBeforeOperation(req, res)

  const { errorMsg, value } = validateRequestBody(CheckInSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))
  const { title, name, email, phone, from, to, paymentMethod } = value
  const roomId = req.params.roomId
  const currentStaffId = req.staff._id
  const checkInDetails = {
    roomId, title, name, email, phone, from, to, paymentMethod, createdBy: currentStaffId, updatedBy: currentStaffId
  }
  try {
    const newBookedRoom = Room.updateOne({ _id: roomId }, { status: ROOM_STATUS.BOOKED }, { new: true })
    const bookedRoom = await newBookedRoom.save()
    const newCheckIn = new CheckIn(checkInDetails)
    const checkedIn = await newCheckIn.save()

    return res.json(success({ bookedRoom, checkedIn }))
  } catch (e) {
    return res.json(failed('Error occured. Could not book room.'))
  }
}

export const checkOut = async (req, res) => {
  await authorizeBeforeOperation(req, res)
  const roomId = req.params.roomId
  try {
    const newCheckout = Room.updateOne({ _id: roomId }, { status: ROOM_STATUS.EMPTY }, { new: true })
    const checkedOut = await newCheckout.save()
    return res.json(success(checkedOut))
  } catch (e) {
    return res.json(failed('Error occured. Try again!'))
  }
}
