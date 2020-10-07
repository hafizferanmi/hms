import Debug from 'debug'
import Staff from '../models/staff'
import Company from '../models/company'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/staff.js')

const { hashPassword } = helpers.password
const { normalizePhoneNumber } = helpers.user
const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { StaffSchema } = ValidationSchemas

export const addStaff = async (req, res) => {
  debug('addStaff()')
  const currentCompanyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(StaffSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, password, email, role, phone } = value

  // check for company
  try {
    const dbCompany = await Company.findById(currentCompanyId)
    if (!dbCompany) {
      return res.json(failed('Company does not exist!'))
    }
  } catch (e) {
    return res.json(failed('Error occured, Do try again.'))
  }

  // hash password
  const hashedPassword = await hashPassword(password)
  const normalizedPhoneNumber = normalizePhoneNumber(phone)
  const staff = await Staff.find({ email, companyId: currentCompanyId })
  if (!staff) return res.json(failed('Staff with email already exist!.'))

  const staffData = {
    name,
    phone: normalizedPhoneNumber,
    email,
    password: hashedPassword,
    role,
    companyId: currentCompanyId,
    createdAt: currentStaffId,
    updatedBy: currentStaffId
  }

  try {
    const staff = new Staff(staffData)
    const savedStaff = await staff.save()
    return res.json(success(savedStaff))
  } catch (e) {
    return res.json(failed('Fatal error occured. Try again soon.'))
  }
}

export const updateStaff = async (req, res) => {
  debug('updateStaff()')
  const currentCompanyId = req.staff.companyId
  const staffId = req.params.staffId
  const { value, errorMsg } = validateRequestBody(StaffSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, email, role, phone } = value

  let staff
  try {
    staff = await Staff.findOne({ _id: staffId, companyId: currentCompanyId })
    if (!staff) return res.json(failed('Unauthorized. Staff does not belong to this company.'))
  } catch (e) {
    return res.json(failed('Error occured. Try again!'))
  }

  const staffData = {
    name,
    password: staff.password,
    email,
    role,
    phone,
    updatedBy: staffId
  }

  try {
    const updatedStaff = await Staff.findOneAndUpdate({ _id: staffId }, staffData, { new: true })
    return res.json(success(updatedStaff))
  } catch (e) {
    return res.json(failed('Update staff failed. Try again.'))
  }
}

export const getAllStaffs = async (req, res) => {
  debug('getAllStaffs()')
  const currentCompanyId = req.staff.companyId

  try {
    const staffs = await Staff.find({ companyId: currentCompanyId })
    return res.json(success(staffs))
  } catch (e) {
    return res.json(failed('Error fetching staffs. Try again!'))
  }
}

export const getStaff = async (req, res) => {
  debug('getStaff()')
  const currentCompanyId = req.staff.companyId
  const staffId = req.params.staffId

  let staff
  try {
    staff = await Staff.findOne({ _id: staffId, companyId: currentCompanyId })
  } catch (e) {
    return res.json(failed('Unauthorized to perform operation.'))
  }

  if (!staff) return res.json(failed('Unauthorized, staff does not exist.'))

  return res.json(success(staff))
}

export const deleteStaff = async (req, res) => {
  debug('deleteStaff()')
  const currentCompanyId = req.staff.companyId
  const staffId = req.params.staffId
  debug(`staffId - ${staffId}`)

  let staff
  try {
    staff = await Staff.findOne({ _id: staffId, companyId: currentCompanyId })
    if (!staff) {
      return res.json(failed('Unauthorized, staff does not exist.'))
    }
  } catch (e) {
    return res.json(failed('Error Occured. Could not find staff.'))
  }

  try {
    const deletedStaff = await Staff.findOneAndDelete({ _id: staffId })
    return res.json(success(deletedStaff))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete staff.'))
  }
}

export const currentStaff = async (req, res) => {
  debug('currentStaff()')
  return res.json(success(req.staff))
}
