import Company from '../models/company'
import Staff from '../models/staff'
import Admin from '../models/admin'
import helpers from '../helpers'
import Debug from 'debug'

const debug = Debug('API: auth')

const { isCorrectPassword } = helpers.password
const { generateAuthToken } = helpers.jwt
const { JsonResponse, failed, success } = helpers.response

export const staffLogin = async (req, res) => {
  const { email, password, company: subdomain } = req.body
  if (!email || !password || !subdomain) {
    return res.json(JsonResponse(false, [], 'Login credentials failed'))
  }

  try {
    const company = await Company.findOne({ subdomain })
    if (!company) {
      return res.json(JsonResponse(false, [], 'Staff does not belong to this company'))
    } else {
      const companyId = company._id
      const staff = await Staff.findOne({ email, company: companyId })
      if (!staff) {
        return res.json(JsonResponse(false, [], 'Error occured, try in a moment'))
      }

      if (await isCorrectPassword(password, staff.password)) {
        const staffId = staff._id
        const token = generateAuthToken(staffId)
        return res.json(JsonResponse(true, token))
      } else {
        return res.json(JsonResponse(false, [], 'Invalid credentials'))
      }
    }
  } catch (e) {
    return res.json(JsonResponse(false, [], 'Error occured, try in a moment'))
  }
}

export const adminLogin = async (req, res) => {
  debug('adminLogin')
  const { email, password } = req.body
  if (!email || !password) {
    return res.json(failed('Fill form properly to proceed'))
  }

  try {
    const admin = await Admin.findOne({ email })
    if (!admin) {
      debug('Admin user not found')
      return res.json(failed('Admin user not found'))
    }

    if (await isCorrectPassword(password, admin.password)) {
      const adminId = admin._id
      const token = generateAuthToken(adminId)
      debug('Admin loggedin successful')
      return res.json(success({ token }))
    } else {
      debug('Wrong admin details. Login failed')
      return res.json(failed('Invalid credentials'))
    }
  } catch (e) {
    debug('Error occured: ' + e)
  }
}
