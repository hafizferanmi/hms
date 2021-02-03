import Debug from 'debug'
import Hall from '../models/hall'
import Rooms from '../models/room'
import RoomTypes from '../models/roomTypes'
import CheckIn from '../models/checkIn'
import helpers from '../helpers'

const debug = Debug('API:businesslogic/emailTemplate.js')

const { failed, success } = helpers.response

export const dashboardData = async (req, res) => {
  debug('dashboardData()')
  const companyId = req.staff.companyId

  try {
    const halls = Hall.find({ companyId }).countDocuments()
    const guests = CheckIn.find({ companyId, checkedOut: false }).countDocuments()
    const rooms = Rooms.find({ companyId }).countDocuments()
    const roomTypes = RoomTypes.find({ companyId }).countDocuments()

    let data = await Promise.all([halls, guests, rooms, roomTypes])

    data = {
      halls: data[0],
      guests: data[1],
      rooms: data[2],
      roomTypes: data[3]
    }
    return res.json(success(data))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }
}
