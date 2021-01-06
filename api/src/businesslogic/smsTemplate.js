import Debug from 'debug'
import SMSTemplate from '../models/smsTemplates'
import helpers from '../helpers'
import ValidationSchemas from '../ValidationSchemas'

const debug = Debug('API:businesslogic/smsTemplate.js')

const { failed, success } = helpers.response
const { validateRequestBody } = helpers.misc
const { SMSTemplateSchema } = ValidationSchemas

export const addSMSTemplate = async (req, res) => {
  debug('addSMSTemplate()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const { value, errorMsg } = validateRequestBody(SMSTemplateSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const SMSTemplateData = {
    ...value,
    companyId,
    createdBy: currentStaffId
  }

  try {
    let template = new SMSTemplate(SMSTemplateData)
    template = await SMSTemplate.save()
    return res.json(success(template))
  } catch (e) {
    return res.json(failed('Error Occured, could not create SMS template.'))
  }
}

export const updateSMSTemplate = async (req, res) => {
  debug('updateSMSTemplate()')
  const companyId = req.staff.companyId
  const currentStaffId = req.staff._id
  const templateId = req.params.templateId
  const { value, errorMsg } = validateRequestBody(SMSTemplateSchema, req.body)

  if (errorMsg) {
    return res.json(failed(errorMsg))
  }

  const SMSTemplateData = {
    ...value,
    companyId,
    updatedBy: currentStaffId
  }

  const conditons = {
    companyId,
    _id: templateId
  }
  try {
    const template = await SMSTemplate.findOneAndUpdate(conditons, SMSTemplateData, { new: true })
    return res.json(success(template))
  } catch (e) {
    return res.json(failed('Error Occured, could not update SMS template.'))
  }
}

export const getSMSTemplate = async (req, res) => {
  debug('getSMSTemplate()')
  const companyId = req.staff.companyId
  const templateId = req.params.templateId

  try {
    const template = await SMSTemplate.findOne({ _id: templateId, companyId })
    return res.json(success(template))
  } catch (e) {
    res.json(failed('Error occured, could not fetch SMS template'))
  }
}

export const getSMSTemplates = async (req, res) => {
  debug('getSMSTemplates()')
  const companyId = req.staff.companyId
  const templateId = req.params.templateId

  try {
    const templates = await SMSTemplate.find({ _id: templateId, companyId })
    return res.json(success(templates))
  } catch (e) {
    res.json(failed('Error occured, could not fetch SMS templates'))
  }
}

export const deleteSMSTemplate = async (req, res) => {
  debug('deleteSMSTemplate()')
  const companyId = req.staff.companyId
  const templateId = req.params.templateId

  try {
    const template = await SMSTemplate.findOneAndDelete({ _id: templateId, companyId })
    return res.json(success(template))
  } catch (e) {
    res.json(failed('Error occured, could not fetch SMS templates'))
  }
}
