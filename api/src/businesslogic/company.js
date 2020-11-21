import Company from '../models/company'
import Staff from '../models/staff'
import helpers from '../helpers'
import { STAFF_ROLES } from '../constants/staff'
import ValidationSchemas from '../ValidationSchemas'

const { CompanySchema } = ValidationSchemas
const { hashPassword } = helpers.password
const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc

export const createCompany = async (req, res) => {
  const { value, errorMsg } = validateRequestBody(CompanySchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const { company: companyName, subdomain, manager, email, password } = value

  let company
  try {
    const companyExists = await Company.findOne({ subdomain })
    if (companyExists) {
      return res.json(failed('Company already exists, choose a new subdomain'))
    }

    company = new Company({ name: companyName, subdomain })
    company = await company.save()
  } catch (e) {
    return res.json(failed('Error Occured. Could not create company'))
  }
  try {
    let staff = await new Staff({
      name: manager,
      password: await hashPassword(password),
      email,
      role: STAFF_ROLES.GENERAL_MANAGER,
      companyId: company._id
    })
    staff = await staff.save()
    staff = staff.toObject()
    delete staff.password
    return res.json(success({ company, staff }))
  } catch (e) {
    try {
      await Company.deleteOne({ subdomain })
      return res.json(failed('Error Occured, try again.'))
    } catch (e) {
      return res.json(failed('Something bad really happened. Looking to it immediately.'))
    }
  }
}

export const allCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    return res.json(success(companies))
  } catch (e) {
    return res.json(failed('Error Occured, try again.'))
  }
}
