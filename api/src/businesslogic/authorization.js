import Company from '../models/company'
import RoomType from '../models/roomTypes'
import helpers from '../helpers'

const { areIdsEqual } = helpers.misc
const { getSubdomain } = helpers.domain
const { failed } = helpers.response

export const staffBelongsToCompany = (staff, subdomain) => {
  try {
    const company = Company.find({ subdomain })
    const companyId = company._id
    const staffCompanyId = staff.company
    return areIdsEqual(companyId, staffCompanyId)
  } catch (e) {
    return false
  }
}

export const authorizeBeforeOperation = async (req, res) => {
  const subdomain = getSubdomain(req)
  const roomTypeId = req.params.roomTypeId
  const currentStaffCompanyId = req.staff.companyId
  let dbRoomType
  try {
    dbRoomType = await RoomType.find({ _id: roomTypeId })
    if (!dbRoomType) return res.json(failed('Error occured. Room type does not exist.'))
  } catch (e) {
    res.json(failed('Error occured. Try again'))
  }

  let dbCompany
  try {
    dbCompany = await Company.find({ subdomain })
    if (!dbCompany) return res.json(failed('Error occured, company not found!'))
  } catch (e) {
    return res.json(failed('Error occured. Try again.'))
  }

  const dbCompanyId = dbCompany._id
  const dbRoomTypeCompanyId = dbRoomType.companyId
  if (!areIdsEqual(dbCompanyId, dbRoomTypeCompanyId)) {
    return res.json(failed('Unauthorized to update type.'))
  }

  if (!areIdsEqual(currentStaffCompanyId, dbCompanyId)) {
    return res.json(failed('Unauthorized to update room type.'))
  }
  // Todo: check if logged in staff is Manager (admin)
}
