import Debug from 'debug'
import Room from '../models/room'
import CheckIn from '../models/checkIn'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'
import { ROOM_STATUS } from '../constants/room'

const debug = Debug('API:businessLogin/checkIn.js')

const { CheckInSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc

export const checkIn = async (req, res) => {
  debug('checkIn()')
  const currentStaffId = req.staff._id
  const currentStaffCompanyId = req.staff.companyId

  const { errorMsg, value } = validateRequestBody(CheckInSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const {
    title,
    name,
    email,
    phone,
    occupation,
    arrivingFrom,
    purpose,
    meansOfTravel,
    nextOfKin,
    nextOfKinPhoneNo,
    dateOfArrival,
    dateOfDeparture,
    paymentMethod,
    note,
    room: roomId
  } = value

  const checkInDetails = {
    roomId,
    title,
    name,
    email,
    phone,
    occupation,
    arrivingFrom,
    purpose,
    meansOfTravel,
    nextOfKin,
    nextOfKinPhoneNo,
    dateOfArrival,
    dateOfDeparture,
    paymentMethod,
    note,
    createdBy: currentStaffId,
    updatedBy: currentStaffId,
    checkedInBy: currentStaffId,
    companyId: currentStaffCompanyId
  }

  const conditions = {
    _id: roomId,
    companyId: currentStaffCompanyId
  }

  let room
  try {
    room = await Room.findOne(conditions)
  } catch (e) {
    return res.json(failed('Error occured. Cound not book room'))
  }

  if (!room) return res.json(failed('Cannot book a non-existent room'))
  if (room.status === ROOM_STATUS.BOOKED) return res.json(failed('Room is already checkedIn'))
  if (room.status === ROOM_STATUS.RESERVED) return res.json(failed('Room is reserved. Cannot be booked'))
  if (room.status === ROOM_STATUS.NOT_AVAILABLE) return res.json(failed('Room is currently not available for booking.'))

  const set = {
    status: ROOM_STATUS.BOOKED
  }

  try {
    const bookedRoom = await Room.findOneAndUpdate(conditions, set, { new: true })
    let checkIn = new CheckIn(checkInDetails)
    checkIn = await checkIn.save()

    return res.json(success({ bookedRoom, checkIn }))
  } catch (e) {
    return res.json(failed('Error occured. Could not book room.'))
  }
}

export const updateCheckIn = async (req, res) => {
  debug('updateCheckIn()')
  const currentStaffId = req.staff._id
  const currentStaffCompanyId = req.staff.companyId
  const checkInId = req.params.checkInId

  const { errorMsg, value } = validateRequestBody(CheckInSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const {
    title,
    name,
    email,
    phone,
    occupation,
    arrivingFrom,
    purpose,
    meansOfTravel,
    nextOfKin,
    nextOfKinPhoneNo,
    dateOfArrival,
    dateOfDeparture,
    paymentMethod,
    note,
    room: roomId
  } = value

  const checkInDetails = {
    roomId,
    title,
    name,
    email,
    phone,
    occupation,
    arrivingFrom,
    purpose,
    meansOfTravel,
    nextOfKin,
    nextOfKinPhoneNo,
    dateOfArrival,
    dateOfDeparture,
    paymentMethod,
    note,
    updatedBy: currentStaffId,
    companyId: currentStaffCompanyId
  }
  // Todo: check if its the same room that was updated.

  let roomCheckIn
  try {
    // checking if not already checked out: cannot update checkIn when already checkedout
    roomCheckIn = await CheckIn.find({ _id: checkInId, companyId: currentStaffCompanyId })
  } catch (e) {
    return res.json(failed('Error Occured. Could not update checkIn'))
  }

  if (!roomCheckIn) return res.json(failed('CheckIn not found.'))
  if (roomCheckIn.checkedOut) return res.json(failed('Room is already checkedout. Can no longer update'))

  const checkInConditions = { _id: checkInId, companyId: currentStaffCompanyId }

  try {
    const updatedCheckIn = await CheckIn.findOneAndUpdate(checkInConditions, checkInDetails, { new: true })
    return res.json(success(updatedCheckIn))
  } catch (e) {
    return res.json(failed('Error occured. Could not update checkIn. Try again'))
  }
}

export const checkOut = async (req, res) => {
  debug('checkOut()')
  const currentStaffId = req.staff._id
  const currentStaffCompanyId = req.staff.companyId
  const checkInId = req.params.checkInId

  let checkIn
  try {
    checkIn = await CheckIn.find({ _id: checkInId, companyId: currentStaffCompanyId })
  } catch (e) {
    return res.json(failed('Error occured. CheckIn not found.'))
  }

  if (!checkIn) return res.json(failed('CheckIn not found.'))
  if (checkIn.checkedOut) return res.json(failed('Already checkedout cannot proceed.'))

  const roomConditions = {
    _id: checkIn.roomId,
    companyId: currentStaffCompanyId
  }

  const setRoom = {
    status: ROOM_STATUS.EMPTY
  }

  const findCheckInConditions = {
    _id: checkInId,
    roomId: checkIn.roomId,
    companyId: currentStaffCompanyId
  }

  const setCheckOut = {
    checkedOutBy: currentStaffId,
    checkedOut: true
  }

  try {
    const room = await Room.findOneAndUpdate(roomConditions, setRoom, { new: true })
    const checkOut = await CheckIn.findOneAndUpdate(findCheckInConditions, setCheckOut, { new: true })
    return res.json(success({ room, checkOut }))
  } catch (e) {
    return res.json(failed('Error occured. Try again!'))
  }
}

export const getCheckIn = async (req, res) => {
  debug('getCheckIn')
  const currentStaffCompanyId = req.staff.companyId
  const checkInId = req.params.checkInId

  try {
    const checkIn = await CheckIn.find({ _id: checkInId, companyId: currentStaffCompanyId })
    if (!checkIn) {
      return res.json(failed('CheckIn not found.'))
    } else {
      return res.json(success(checkIn))
    }
  } catch (e) {
    return res.json(failed('Error occured. Could not get checkIn.'))
  }
}

export const getAllCheckIn = async (req, res) => {
  debug('getAllCheckIn()')
  const currentStaffCompanyId = req.staff.companyId

  // Todo: query params to filter if all, checkedIn, checkedOut, From, To
  const type = req.query.type
  // const from  = req.query.from
  // const to = req.query.to

  const conditions = {
    companyId: currentStaffCompanyId
  }

  if (type === 'CHECKEDOUT') {
    conditions.checkedOut = true
  }

  try {
    const checkIns = await CheckIn.find(conditions)
    return res.json(success(checkIns))
  } catch (e) {
    return res.json(failed('Error occured. Could not checkIns'))
  }
}

export const deleteCheckIn = async (req, res) => {
  debug('deleteCheckIn()')
  const currentStaffCompanyId = req.staff.companyId
  const checkInId = req.params.checkInId

  let checkIn
  try {
    checkIn = await CheckIn.find({ _id: checkInId, companyId: currentStaffCompanyId })
  } catch (e) {
    return res.json(failed('Error occured. Cannot delete checkIn.'))
  }

  if (!checkIn) return res.json(failed('CheckIn not found.'))
  if (checkIn.checkedOut) return res.json(failed('Cannot delete. Already checked out'))

  try {
    const deletedCheckIn = await CheckIn.findOneAndDelete({ _id: checkInId, companyId: currentStaffCompanyId })
    return res.json(success(deletedCheckIn))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete checkIn'))
  }
}
