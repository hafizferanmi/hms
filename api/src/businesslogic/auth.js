import Staff from '../models/staff'
import Admin from '../models/admin'
import helpers from '../helpers'
import Debug from 'debug'
import crypto from 'crypto'

const debug = Debug('API: businesslogic/auth.js')

const { isCorrectPassword, hashPassword } = helpers.password
const { generateAuthToken } = helpers.jwt
const { failed, success } = helpers.response

export const staffLogin = async (req, res) => {
  debug('staffLogin()')

  const { email, password } = req.body
  if (!email || !password) {
    return res.json(failed('Login credentials failed'))
  }

  try {
    let staff = await Staff.findOne({ email })

    if (!staff) return res.json(failed('Login credentials failed.'))
    if (staff.disabled) return res.json(failed('Account disabled. Contact your adminstrator.'))

    if (await isCorrectPassword(password, staff.password)) {
      const staffId = staff._id
      const token = generateAuthToken(staffId)

      staff = staff.toObject()
      delete staff.password
      return res.json(success({ token, staff }))
    } else {
      return res.json(failed('Wrong email/password combination.'))
    }
  } catch (e) {
    return res.json(failed('Error occured, try in a moment'))
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

export const changeStaffPassword = async (req, res) => {
  debug('changeStaffPasswod')
  const staffId = req.staff._id

  const { oldPassword, newPassword, confirmPassword } = req.body
  if (!oldPassword || !newPassword || confirmPassword) return res.json(failed('Fill form properly to proceed!'))
  if (newPassword !== confirmPassword) return res.json(failed('New password and confirm password does not match'))

  try {
    const staff = await Staff.findById(staffId)
    const isPasswordSame = await !isCorrectPassword(oldPassword, staff.password)
    if (isPasswordSame) return res.json(failed('Incorrect old password.'))

    const hashedPassword = await hashPassword(newPassword)
    await Staff.findOneAndUpdate({ _id: staffId }, { password: hashedPassword }, { new: true })
    return res.json(success({ passwordUpdated: true }))
  } catch (e) {
    return res.json(failed('Error occued. Try again.'))
  }
}

export const recoverStaffPassword = async (req, res) => {
  debug('recoverStaffPassword')
  const { email } = req.body
  if (!email) res.json(failed('Your registered email has to be provided'))

  try {
    const staff = Staff.findOne({ email })
    if (!staff) return res.json(failed('Invalid, user not found.'))

    const token = crypto.randomBytes(20).toString('hex')
    const set = {
      resetPasswordToken: token,
      resetPasswordTokenExpires: Date.now() + 86400000 // 24 hours
    }

    await Staff.findOneAndUpdate({ email }, set, { new: true })
    // TODO: sendMail containing reset password token to the user
    return res.json(success())
  } catch (e) {
    return res.json(failed('Error occured. Try again'))
  }
}

export const resetPassword = async (req, res) => {
  debug('resetPassword')
  // extract token from url, send new password and confirm password to the server, store the new password
  const { token, email, password, confirmPassword } = req.body

  if (!token || !email || !password || !confirmPassword) return res.json(failed('Fill form properly to proceed'))
  if (password !== confirmPassword) return res.json(failed('Password/Confirm password does not match'))

  try {
    const staff = await Staff.findOne({ email, resetPasswordToken: token })
    if (!staff) return res.json(failed('Confirm email address.'))

    const set = {
      password: await hashPassword(password),
      resetPasswordToken: null,
      resetPasswordTokenExpires: null
    }
    // TODO: Send mail that password is reset successfully to staff.
    await Staff.findOneAndUpdate({ email }, set)
    return res.json(success())
  } catch (e) {
    return res.json(failed('Error occured, try again.'))
  }
}
