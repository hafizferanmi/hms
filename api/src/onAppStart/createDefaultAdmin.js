import Admin from '../models/admin'
import helpers from '../helpers'
import Debug from 'debug'

const debug = Debug('API: Default Admin')

debug('Checking if need to create a default admin user')
const { hashPassword } = helpers.password

const DEFAULT_ADMIN_EMAIL = 'admin@hms.ng'
const DEFAULT_ADMIN_PASSWORD = 'adm1n'
const DEFAULT_ADMIN_NAME = 'Admin'

const createDefaultAdmin = async () => {
  let isDefaultAdminCreated
  try {
    isDefaultAdminCreated = await Admin.findOne({ email: DEFAULT_ADMIN_EMAIL })
  } catch (e) {
    debug('Error occured trying to get default admin')
  }

  if (isDefaultAdminCreated) {
    debug('Default admin already exists')
    return
  }

  debug('Creating default admin user')
  const password = await hashPassword(DEFAULT_ADMIN_PASSWORD)
  const adminData = {
    email: DEFAULT_ADMIN_EMAIL,
    name: DEFAULT_ADMIN_NAME,
    password
  }

  try {
    const admin = await new Admin(adminData)
    await admin.save()
  } catch (e) {
    console.log('Error Occured: ' + e)
  }
}

export default createDefaultAdmin
