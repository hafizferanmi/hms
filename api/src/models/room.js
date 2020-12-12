import mongoose, { Schema } from 'mongoose'
import { ROOM_STATUS, ROOM_CLEAN_STATUS } from '../constants/room'
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
  cleanStatus: {
    type: String,
    required: true,
    default: ROOM_CLEAN_STATUS.CLEAN,
    enum: R.values(ROOM_CLEAN_STATUS)
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
