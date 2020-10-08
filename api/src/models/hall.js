import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: String,
    required: true
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

export default mongoose.model('hallType', schema)
