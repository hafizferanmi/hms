import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'
import { TEMPLATES_TYPE } from '../constants/misc'

const schema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    enum: Object.values(TEMPLATES_TYPE)
  },
  name: {
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

export default mongoose.model('smsTemplate', schema)
