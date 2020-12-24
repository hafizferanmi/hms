import mongoose, { Schema } from 'mongoose'
import { CSV_TYPE } from '../constants/misc'

const schema = new Schema({
  filename: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  itemsCount: {
    type: Number,
    default: 0
  },
  content: {
    type: Array,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  bulkUploadType: {
    type: String,
    enum: Object.values(CSV_TYPE),
    required: true
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('bulkUpload', schema)
