import Staff from '../models/staff'
import Company from '../models/company'
import helpers from '../helpers'
import { isEmpty } from 'ramda'

const { hashPassword } = helpers.password
const { normalizePhoneNumber } = helpers.user
const { JsonResponse } = helpers.response

const addStaff = async (req, res) => {
  const { name, password, email, role, subdomain, phone } = req.body

  // check for company
  let companyId
  try {
    const dbCompany = await Company.findOne({ subdomain })
    if (!dbCompany) {
      return res.json(JsonResponse(false, [], 'Company not found'))
    } else {
      companyId = dbCompany._id
    }
  } catch (e) {
    return res.json(JsonResponse(false, [], 'Company not found'))
  }

  // hash password
  const hashedPassword = await hashPassword(password)
  const normalizedPhoneNumber = normalizePhoneNumber(phone)
  const staff = await Staff.find({ email, company: subdomain })
  if (isEmpty(staff)) {
    const staffData = {
      name,
      phone: normalizedPhoneNumber,
      email,
      password: hashedPassword,
      role,
      company: companyId
    }
    const staff = Staff.create({ staffData })
    return res.json(JsonResponse(true, staff))
  } else {
    return res.json(JsonResponse(false, [], 'User with email already exist.'))
  }
}

const updateStaff = async (req, res) => {

}

export {
  addStaff,
  updateStaff
}
