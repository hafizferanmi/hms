import multer from 'multer'
import path from 'path'

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

export const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!'
    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
}

export const validateFileUpload = (req, err) => {
  let errorMsg
  if (req.fileValidationError) {
    errorMsg = req.fileValidationError
  } else if (!req.file) {
    errorMsg = 'NO_FILE_UPLOADED'
  } else if (err instanceof multer.MulterError) {
    errorMsg = 'ERROR_OCCURED'
  } else if (err) {
    errorMsg = 'ERROR_OCCURED'
  }

  return errorMsg
}
