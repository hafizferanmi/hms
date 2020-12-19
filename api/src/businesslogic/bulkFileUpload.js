import Debug from 'debug'
import multer from 'multer'
import csv from 'neat-csv'
import fs from 'fs'
import helpers from '../helpers'
import BulkUpload from '../models/bulkUpload'
import { storage, csvFilter, validateFileUpload } from '../helpers/multer'

const debug = Debug('API:businesslogic/bulkFileUpload.js')

// TODO: Learn how to download uploaded files from the browser

const uploadPhoneCSV = multer({ storage, fileFilter: csvFilter }).single('phoneCSV')
const uploadEmailCSV = multer({ storage, fileFilter: csvFilter }).single('emailCSV')
const uploadCustomerCSV = multer({ storage, fileFilter: csvFilter }).single('customerCSV')
const { failed, success } = helpers.response

export const uploadBulkPhoneCSV = async (req, res) => {
  debug('uploadBulkPhoneCSV()')
  const companyId = req.staff.companyId
  const currentstaff = req.staff._id

  uploadPhoneCSV(req, res, async (err) => {
    const errorMsg = validateFileUpload(req, err)
    if (errorMsg === 'ERROR_OCCURED') return res.json(failed('Slight issue with the phone file upload. Try again'))
    if (errorMsg === 'NO_FILE_UPLOADED') return res.json(failed('You need to upload a CSV file containing phone numbers to proceed.'))
    if (errorMsg) return res.json(failed(errorMsg))
    const filename = req.file && req.file.filename

    // Todo: open file to check if the file uploaded is a valid csv file and it contains validated phone numbers
    // Todo: count numbers of email addressess uploaded in the file.

    const uploadDetails = {
      filename,
      companyId,
      bulkUploadType: 'PHONE',
      uploadedBy: currentstaff
    }

    try {
      let upload = new BulkUpload(uploadDetails)
      upload = await upload.save()
      return res.json(success(upload))
    } catch (e) {
      return res.json(failed('Error occured, try again.'))
    }
  })
}

export const uploadBulkEmailCSV = async (req, res) => {
  debug('uploadBulkPhoneCSV()')
  const companyId = req.staff.companyId
  const currentstaff = req.staff._id

  uploadEmailCSV(req, res, async (err) => {
    const errorMsg = validateFileUpload(req, err)
    if (errorMsg === 'ERROR_OCCURED') return res.json(failed('Slight issue with the emails file upload. Try again'))
    if (errorMsg === 'NO_FILE_UPLOADED') return res.json(failed('You need to upload a CSV file containing emails to proceed.'))
    if (errorMsg) return res.json(failed(errorMsg))
    const filename = req.file && req.file.filename
    const path = req.file && req.file.path

    const content = await csv(fs.createReadStream(path))

    const uploadDetails = {
      filename,
      companyId,
      content,
      itemsCount: content.length,
      bulkUploadType: 'EMAIL',
      uploadedBy: currentstaff
    }

    try {
      let upload = new BulkUpload(uploadDetails)
      upload = await upload.save()
      return res.json(success(upload))
    } catch (e) {
      return res.json(failed('Error occured, try again.'))
    }
  })
}

export const uploadBulkCustomerDataCSV = async (req, res) => {
  debug('uploadBulkCustomerDataCSV()')
  const companyId = req.staff.companyId
  const currentstaff = req.staff._id

  uploadCustomerCSV(req, res, async (err) => {
    const errorMsg = validateFileUpload(req, err)
    if (errorMsg === 'ERROR_OCCURED') return res.json(failed('Slight issue with the customer data file upload. Try again'))
    if (errorMsg === 'NO_FILE_UPLOADED') return res.json(failed('You need to upload a CSV file containing customers data to proceed.'))
    if (errorMsg) return res.json(failed(errorMsg))
    const filename = req.file && req.file.filename
    const path = req.file && req.file.path
    const fileSize = req.file && req.file.size

    const content = await csv(fs.createReadStream(path), {
      headers: ['name', 'phone', 'email']
    })

    const uploadDetails = {
      filename,
      companyId,
      content,
      fileSize,
      itemsCount: content.length,
      bulkUploadType: 'CUSTOMERS',
      uploadedBy: currentstaff
    }

    try {
      let upload = new BulkUpload(uploadDetails)
      upload = await upload.save()
      return res.json(success(upload))
    } catch (e) {
      return res.json(failed('Error occured, try again.'))
    }
  })
}

export const getBulkFiles = async (req, res) => {
  debug('getBulkFiles()')
  const companyId = req.staff.companyId
  const type = req.query.type

  const conditions = {
    companyId
  }

  if (type) conditions.bulkUploadType = type

  try {
    const files = await BulkUpload.find(conditions)
    return res.json(success(files))
  } catch (e) {
    return res.json(failed('Error occured, try again.'))
  }
}

export const getBulkFile = async (req, res) => {
  debug('getBulkFile()')
  const companyId = req.staff.companyId
  const fileId = req.params.fileId

  try {
    const file = await BulkUpload.findOne({ companyId, _id: fileId })
    return res.json(success(file))
  } catch (e) {
    return res.json(failed('Error occured, try again.'))
  }
}

export const deleteBulkFileUpload = async (req, res) => {
  debug('deleteBulkFileUpload()')
  const companyId = req.staff.companyId
  const staffId = req.staff._id
  const fileId = req.params.fileId

  try {
    let file = await BulkUpload.findOne({ _id: fileId, companyId })
    if (!file) return res.status(400).json(failed('Unauthorized, file does not exist.'))
    fs.unlinkSync(file.filename) // removes file from server

    file = await file.delete(staffId)
    return res.json(success(file))
  } catch (e) {
    return res.json(failed('Error occured. Could not delete file. Try again'))
  }
}
