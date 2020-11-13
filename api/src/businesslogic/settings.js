import Company from '../models/company'
import Debug from 'debug'
import multer from 'multer'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'
import { storage, imageFilter, validateFileUpload } from '../helpers/multer'

const debug = Debug('API:businessLogic/settings.js')

const { RoomSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc
const upload = multer({ storage, fileFilter: imageFilter }).single('logo')

export const updateCompanyInfo = async (req, res) => {
  debug('updateCompanyInfo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  const { errorMsg, value } = validateRequestBody(RoomSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const companyDetails = {
    ...value,
    updatedBy: staffId
  }

  try {
    const company = await Company.findOneAndUpdate({ _id: companyId }, companyDetails, { new: true })
    return res.json(success(company))
  } catch (e) {
    return res.json(failed('Error occured, try again.'))
  }
}

export const uploadCompanyLogo = (req, res) => {
  debug('uploadCompanyLogo()')
  const companyId = req.staff.companyId

  upload(req, res, async (err) => {
    const errorMsg = validateFileUpload(req, err)
    if (errorMsg === 'ERROR_OCCURED') return res.json(failed('Slight issue with the logo upload. Try again'))
    if (errorMsg === 'NO_FILE_UPLOADED') return res.json(failed('You need to upload your company logo image.'))
    if (errorMsg) return res.json(failed(errorMsg))
    const logo = req.file && req.file.filename

    try {
      const company = await Company.findOneAndUpdate({ _id: companyId }, { logo }, { new: true })
      return res.json(success(company))
    } catch (e) {
      return res.json(failed('Error occured, try again.'))
    }
  })
}

export const updateBillingDetials = async (req, res) => {
  debug('updateBillingDetials()')
}
