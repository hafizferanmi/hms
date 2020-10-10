import Debug from 'debug'
import Booking from '../models/hallBooking'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/hallBooking.js')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { HallBookingSchema } = ValidationSchemas

export const addBooking = (req, res) => {
  debug('addBooking()')
}

export const updateBooking = (req, res) => {
  debug('updateBooking()')
}

export const getBooking = (req, res) => {
  debug('getBooking()')
}

export const getBookings = (req, res) => {
  debug('getBookings()')
}

export const deleteBooking = (req, res) => {
  debug('deleteBooking()')
}
