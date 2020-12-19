import { Router } from 'express'
import {
  uploadBulkEmailCSV,
  uploadBulkPhoneCSV,
  uploadBulkCustomerDataCSV,
  deleteBulkFileUpload,
  getBulkFile,
  getBulkFiles
} from '../businesslogic/bulkFileUpload'

import currentStaff from '../middlewares/currentStaff'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to Bulk upload' })
})
router.post('/uploadEmailCSV', currentStaff, uploadBulkEmailCSV)
router.post('/uploadPhoneCSV', currentStaff, uploadBulkPhoneCSV)
router.post('/uploadCustomersCSV', currentStaff, uploadBulkCustomerDataCSV)
router.delete('/delete/:fileId', currentStaff, deleteBulkFileUpload)
router.get('/all', currentStaff, getBulkFiles)
router.get('/:fileId', currentStaff, getBulkFile)

export default router
