import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'

const schema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['GUEST', 'INVOICE', 'ESTIMATE', 'EVENT']
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

schema.plugin(MongooseDelete, { deletedBy: true, deletedAt: true })

export default mongoose.model('emailTemplate', schema)
