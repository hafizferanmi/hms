import mongoose, { Schema } from 'mongoose'
import { ROOM_STATUS } from '../constants/room'
import R from 'ramda'

const schema = new Schema({
  number: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  status: {
    type: String,
    required: true,
    default: ROOM_STATUS.EMPTY,
    enum: R.values(ROOM_STATUS)
  },
  roomTypeId: {
    type: Schema.Types.ObjectId,
    ref: 'roomType',
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

export default mongoose.model('room', schema)
