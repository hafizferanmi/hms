import Company from '../models/company'
import Debug from 'debug'
import multer from 'multer'
import helpers from '../helpers'
import { countries } from 'countries-list'
import ValidationSchemas from '../ValidationSchemas'
import { storage, imageFilter, validateFileUpload } from '../helpers/multer'

const debug = Debug('API:businessLogic/settings.js')

const { CompanySettingsSchema } = ValidationSchemas
const { success, failed } = helpers.response
const { validateRequestBody } = helpers.misc
const upload = multer({ storage, fileFilter: imageFilter }).single('logo')

export const updateCompanyCurrency = async (req, res) => {
  debug('updateCompanyCurrency')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  const currency = req.body.currency
  const currencies = Object.values(countries).map(country => country.currency)

  if (!currencies.includes(currency)) return res.json(failed('Invalid currency.'))

  const companyDetails = {
    currency,
    updatedBy: staffId
  }

  try {
    const company = await Company.findOneAndUpdate({ _id: companyId }, companyDetails, { new: true })
    return res.json(success(company))
  } catch (e) {
    return res.json(failed('Error occured, try again.'))
  }
}

export const updateCompanyInfo = async (req, res) => {
  debug('updateCompanyInfo()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id

  const { errorMsg, value } = validateRequestBody(CompanySettingsSchema, req.body)

  if (errorMsg) return res.json(failed(errorMsg))

  const { street, suite, city, state, postalCode, country: countryCode } = value

  const country = countries[countryCode]

  const companyAddress = {
    street,
    suite,
    city,
    state,
    postalCode,
    country
  }

  // TODO: Select country with user IP address

  const companyDetails = {
    ...value,
    currency: country && country.currency,
    address: companyAddress,
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
