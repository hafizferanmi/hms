import Staff from '../models/staff'
import Company from '../models/company'
import helpers from '../helpers'
import { isEmpty } from 'ramda'
import ValidationSchemas from '../ValidationSchemas'

const { hashPassword } = helpers.password
const { normalizePhoneNumber } = helpers.user
const { failed, success } = helpers.response
const { validateRequestBody, checkIfIdsAreEqual } = helpers.misc
const { StaffSchema } = ValidationSchemas

export const currentStaff = async (req, res) => {
  // Todo: make method to retrieve current staff.
}

export const addStaff = async (req, res) => {
  const currentCompanyId = req.staff.company
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
    return res.json(failed('Error occure, Do try again.'))
  }

  // hash password
  const hashedPassword = await hashPassword(password)
  const normalizedPhoneNumber = normalizePhoneNumber(phone)
  const staff = await Staff.find({ email, company: currentCompanyId })
  if (isEmpty(staff)) {
    const staffData = {
      name,
      phone: normalizedPhoneNumber,
      email,
      password: hashedPassword,
      role,
      company: currentCompanyId
    }
    const staff = new Staff(staffData)
    const savedStaff = await staff.save()
    return res.json(success(savedStaff))
  } else {
    return res.json(failed('Staff with email already exist!.'))
  }
}

export const updateStaff = async (req, res) => {
  const currentCompanyId = req.staff.company
  const { value, errorMsg } = validateRequestBody(StaffSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { name, email, role, phone } = value

  // Todo: check if admin is admin (Authorized)

  // check if staff belongs to company
  let staff
  try {
    staff = Staff.findOne({ email, company: currentCompanyId })
    if (staff) {
      res.json(failed('Unauthorized. Staff does not belong to this company.'))
    }
  } catch (e) {
    res.json(failed('Error occured. Try again!'))
  }

  const staffData = {
    name, password: staff.password, email, role, phone
  }

  try {
    const updatedStaff = Staff.findOneAndUpdate({ _id: staff.id }, staffData, { new: true })
    return res.json(success(updatedStaff))
  } catch (e) {
    return res.json(failed('Update staff failed. Try again.'))
  }
}

export const getAllStaffs = async (req, res) => {
  const currentCompanyId = req.staff.company

  // Todo: check if staff is Manager

  try {
    const staffs = await Staff.find({ company: currentCompanyId })
    return res.json(success(staffs))
  } catch (e) {
    return res.json(failed('Error fetching staffs. Try again!'))
  }
}

export const getStaff = async (req, res) => {
  const currentCompanyId = req.staff.company
  const staffId = req.params.staffId

  // Todo: check if staff is Manager
  let staff
  try {
    staff = Staff.find({ _id: staffId })
    if (!staff) {
      return res.json(failed('Unauthorized, staff does not exist.'))
    }

    if (!checkIfIdsAreEqual(staff.company, currentCompanyId)) {
      return res.json(failed('Unauthorized, staff does not belong to company'))
    }
  } catch (e) {
    return res.json(failed('Error lo'))
  }

  return res.json(success(staff))
}

export const deleteStaff = async (req, res) => {
  const currentCompanyId = req.staff.company
  const staffToDelete = req.params.staffId
  // Todo: check if staff is manager

  let staff
  try {
    staff = await Staff.find({ _id: staffToDelete })
    if (!staff) {
      return res.json(failed('Unauthorized, staff does not exist.'))
    }

    if (!checkIfIdsAreEqual(staff.company, currentCompanyId)) {
      return res.json(failed('Unauthorized, staff does not belong to company'))
    }
  } catch (e) {
    return res.json(failed('Error Occured. Could not find staff.'))
  }

  try {
    const deletedStaff = Staff.deleteOne({ _id: staffToDelete })
    return res.json(success(deletedStaff))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete staff.'))
  }
}
