import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  roomTypeId: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('room', schema)
