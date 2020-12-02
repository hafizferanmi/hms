import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  starred: {
    type: Boolean,
    default: false
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

export default mongoose.model('todo', schema)
