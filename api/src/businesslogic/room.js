import Room from '../models/room'
import helpers from '../helpers'
import { authorizeBeforeOperation } from './authorization'
import ValidationSchemas from '../ValidationSchemas'

const { RoomSchema } = ValidationSchemas
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
