import Debug from 'debug'
import multer from 'multer'
import Staff from '../models/staff'
import helpers from '../helpers'
import { storage, imageFilter, validateFileUpload } from '../helpers/multer'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/staff.js')

const { hashPassword } = helpers.password
const { normalizePhoneNumber } = helpers.user
const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { StaffSchema } = ValidationSchemas

const upload = multer({ storage, fileFilter: imageFilter }).single('dp')

const STAFF_DEFAULT_PASSWORD = '@password123'

export const addStaff = async (req, res) => {
  debug('addStaff()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(StaffSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, email, role, phone } = value

  // hash password
  const hashedPassword = await hashPassword(STAFF_DEFAULT_PASSWORD)
  const normalizedPhoneNumber = normalizePhoneNumber(phone)
  const staff = await Staff.find({ email, companyId })
  if (!staff) return res.json(failed('Staff with email already exist!.'))

  const staffData = {
    name,
    phone: normalizedPhoneNumber,
    email,
    password: hashedPassword,
    role,
    companyId,
    createdBy: currentStaffId
  }

  try {
    let staff = new Staff(staffData)
    staff = await staff.save()
    return res.json(success(staff))
  } catch (e) {
    return res.json(failed('Fatal error occured. Try again soon.'))
  }
}

export const disableStaff = async (req, res) => {
  debug('disableStaff()')
  const companyId = req.staff.companyId
  const staffId = req.params.staffId

  let staff
  try {
    staff = await Staff.findOne({ _id: staffId, companyId })
    if (!staff) return res.json(failed('Staff does not belong to this company.'))
  } catch (e) {
    return res.json(failed('Error occured. Try again!'))
  }

  const { disabled } = req.body

  try {
    const updatedStaff = await Staff.findOneAndUpdate({ _id: staffId }, { disabled }, { new: true })
    return res.json(success(updatedStaff))
  } catch (e) {
    return res.json(failed('Update staff failed. Try again.'))
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

  let staff
  try {
    staff = await Staff.findOne({ _id: staffId, companyId: currentCompanyId })
    if (!staff) return res.json(failed('Staff does not belong to this company.'))
  } catch (e) {
    return res.json(failed('Error occured. Try again!'))
  }

  const { name, email, role, phone, disabled } = value

  const staffData = {
    name,
    password: staff.password,
    email,
    role,
    phone,
    disabled,
    updatedBy: staffId
  }

  try {
    let updatedStaff = await Staff.findOneAndUpdate({ _id: staffId }, staffData, { new: true })
    updatedStaff = updatedStaff.toObject()
    delete updatedStaff.password
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
  const companyId = req.staff.companyId
  const staffToDelete = req.params.staffId
  const staffDeletingId = req.staff._id

  try {
    let staff = await Staff.findOne({ _id: staffToDelete, companyId })
    if (!staff) return res.status(400).json(failed('Unauthorized, staff does not exist.'))

    staff = await staff.delete(staffDeletingId)
    return res.json(success(staff))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete staff.'))
  }
}

export const currentStaff = async (req, res) => {
  debug('currentStaff()')
  return res.json(success(req.staff))
}

export const updateDisplayPicture = (req, res) => {
  debug('updateDisplayPicture()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  upload(req, res, async (err) => {
    const errorMsg = validateFileUpload(req, err)
    if (errorMsg === 'ERROR_OCCURED') return res.json(failed('Slight issue with the display picture upload. Try again'))
    if (errorMsg === 'NO_FILE_UPLOADED') return res.json(failed('You need to upload your image to proceed.'))
    if (errorMsg) return res.json(failed(errorMsg))
    const displayImage = req.file && req.file.path

    try {
      const company = await Staff.findOneAndUpdate({ _id: staffId, companyId }, { displayImage }, { new: true })
      return res.json(success(company))
    } catch (e) {
      return res.json(failed('Error occured, try again.'))
    }
  })
}
