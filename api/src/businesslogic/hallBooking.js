import Debug from 'debug'
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
    bookingFromDate,
    bookingFromTime,
    bookingToDate,
    bookingToTime,
    paymentMethod,
    ammount
  } = value

  const bookingDetails = {
    hall,
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
    let booking = new Booking(bookingDetails)
    booking = booking.save()
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon'))
  }
}

export const updateBooking = (req, res) => {
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
    const booking = Booking.findOneAndUpdate({ _id: bookingId, companyId }, { bookingDetails }, { new: true })
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again soon'))
  }
}

export const getBooking = (req, res) => {
  debug('getBooking()')
  const companyId = req.staff.companyId
  const bookingId = req.params.bookingId

  try {
    const booking = Booking.findOne({ _id: bookingId, companyId })
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const getBookings = (req, res) => {
  debug('getBookings()')
  const companyId = req.staff.companyId

  try {
    const bookings = Booking.findOne({ companyId })
    return res.json(success(bookings))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}

export const deleteBooking = (req, res) => {
  debug('deleteBooking()')
  const companyId = req.staff.companyId
  const bookingId = req.params.bookingId

  try {
    const booking = Booking.findOneAndDelete({ _id: bookingId, companyId })
    return res.json(success(booking))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}
