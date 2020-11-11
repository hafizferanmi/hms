import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  filename: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  bulkUploadType: {
    type: String,
    enum: ['EMAIL', 'PHONE'],
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
