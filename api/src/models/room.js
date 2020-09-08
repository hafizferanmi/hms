import mongoose, { Schema } from 'mongoose'
import { ROOM_STATUS } from '../constants/room'
import R from 'ramda'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: R.values(ROOM_STATUS)
  },
  roomTypeId: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('room', schema)
