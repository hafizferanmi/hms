import Company from '../models/company'
import Staff from '../models/staff'
import helpers from '../helpers'
import { STAFF_ROLES } from '../constants/staff'

const { hashPassword } = helpers.password
const { JsonResponse, failed, success } = helpers.response

export const createCompany = async (req, res) => {
  const { company: companyName, subdomain, manager, email, password } = req.body
  if (!companyName || !subdomain || !manager || !email || !password) {
    res.json(failed('Name or subdomain cannot be empty'))
  }
  let company
  try {
    const companyExists = await Company.findOne({ subdomain })
    if (companyExists) {
      return res.json(failed('Company already exists, choose a new subdomain'))
    }

    const newCompany = await new Company({ name: companyName, subdomain })
    company = await newCompany.save()
  } catch (e) {
    return res.json(failed('Error Occured. Could not create company'))
  }
  try {
    const newStaff = await new Staff({
      name: manager,
      password: await hashPassword(password),
      email,
      role: STAFF_ROLES.MANAGER,
      company: company._id
    })
    const staff = await newStaff.save()
    delete staff.password
    return res.json(success({ company, staff }))
  } catch (e) {
    await Company.deleteOne({ subdomain })
    return res.json(failed('Error Occured, try again.'))
  }
}

export const allCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    return res.json(JsonResponse(true, companies))
  } catch (e) {
    return res.json(JsonResponse(false, null, 'Error Occured, try again.'))
  }
}
