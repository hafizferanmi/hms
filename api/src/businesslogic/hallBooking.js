import Debug from 'debug'
import dayjs from 'dayjs'
import Booking from '../models/hallBooking'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/hallBooking.js')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { HallBookingSchema } = ValidationSchemas

export const addBooking = async (req, res) => {
  debug('addBooking()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const hall = req.params.hallId

  const { value, errorMsg } = validateRequestBody(HallBookingSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const {
    organizerName,
    organizerPhone,
    organizerEmail,
    organizerWebsite,
    bookingStartDate,
    bookingStartTime,
    bookingEndDate,
    bookingEndTime,
    paymentMethod,
    ammount
  } = value

  const eventStartsAt = `${bookingStartDate}T${bookingStartTime}:00.000Z`
  const eventEndsAt = `${bookingEndDate}T${bookingEndTime}:00.000Z`

  if (dayjs(eventEndsAt).isBefore(dayjs(eventStartsAt))) {
    return res.json(failed('Booking time cannot end before they are started.'))
  }

  if (dayjs(eventStartsAt).isBefore(dayjs(), 'minute') || dayjs(eventEndsAt).isBefore(dayjs(), 'minute')) {
    return res.json(failed('You cannot create an event with start/end time less than now.'))
  }

  try {
    const bookings = await Booking.find({ companyId, hall, to: { $gt: eventStartsAt } })
    if (bookings.length) return res.json(failed('The hall is already booked for the time choosen.'))
  } catch (e) {
    return res.json(failed('Error occured, could not fetch existing events.'))
  }

  try {
    const bookings = await Booking.find({ companyId, hall, from: { $gt: eventStartsAt } })
    if (bookings.length) return res.json(failed('The hall is being booked for part of the time choosen'))
  } catch (e) {
    return res.json(failed('An error occured. We are on it at the moment'))
  }

  const bookingDetails = {
    hall,
    organizer: {
      name: organizerName,
      phone: organizerPhone,
      email: organizerEmail,
      website: organizerWebsite
    },
    from: eventStartsAt,
    to: eventEndsAt,
    payment: {
      ammount,
      method: paymentMethod
    },
    companyId,
    createdBy: currentStaffId
  }

  try {
    let booking = new Booking(bookingDetails)
    booking = await booking.save()
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon!'))
  }
}

export const updateBooking = async (req, res) => {
  debug('updateBooking()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const bookingId = req.params.bookingId
  const { value, errorMsg } = validateRequestBody(HallBookingSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const {
    organizerName,
    organizerPhone,
    organizerEmail,
    organizerWebsite,
    bookingFromDate,
    bookingFromTime,
    bookingToDate,
    bookingToTime,
    paymentMethod,
    ammount
  } = value

  const bookingDetails = {
    organizer: {
      name: organizerName,
      phone: organizerPhone,
      email: organizerEmail,
      website: organizerWebsite
    },
    booking: {
      from: {
        date: bookingFromDate,
        time: bookingFromTime
      },
      to: {
        date: bookingToDate,
        time: bookingToTime
      }
    },
    payment: {
      ammount,
      method: paymentMethod
    },
    companyId,
    createdBy: currentStaffId
  }

  try {
    const booking = await Booking.findOneAndUpdate({ _id: bookingId, companyId }, { bookingDetails }, { new: true })
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon'))
  }
}

export const getBooking = async (req, res) => {
  debug('getBooking()')
  const companyId = req.staff.companyId
  const bookingId = req.params.bookingId

  try {
    const booking = await Booking.findOne({ _id: bookingId, companyId })
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getBookings = async (req, res) => {
  debug('getBookings()')
  const companyId = req.staff.companyId

  // TODO: filter with different parameters

  try {
    const bookings = await Booking.find({ companyId })
    return res.json(success(bookings))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const deleteBooking = async (req, res) => {
  debug('deleteBooking()')
  const companyId = req.staff.companyId
  const bookingId = req.params.bookingId
  const staffId = req.staff._id

  try {
    let booking = await Booking.findOne({ _id: bookingId, companyId })
    if (!booking) return res.status(400).json(failed('Not found'))
    booking = await booking.delete(staffId)
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}
