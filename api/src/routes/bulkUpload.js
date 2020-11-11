import { Router } from 'express'
import {
  uploadBulkEmailCSV,
  uploadBulkPhoneCSV,
  deleteBulkFileUpload,
  getBulkFile,
  getBulkFiles
} from '../businesslogic/bulkFileUpload'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ hi: 'Hi to Bulk upload' })
})
router.post('/uploadEmailCSV', uploadBulkEmailCSV)
router.post('/uploadPhoneCSV', uploadBulkPhoneCSV)
router.delete('/deleteUploadedFile/:fileId', deleteBulkFileUpload)
router.get('/all', getBulkFiles)
router.get('/:fileId', getBulkFile)

export default router
