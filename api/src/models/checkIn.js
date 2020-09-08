import mongoose, { Schema } from 'mongoose'
import { PAYMENT_METHOD } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  from: {
    type: Schema.Types.ObjectId,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: R.values(PAYMENT_METHOD)
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  updatedBy: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true
})

export default mongoose.model('checkIn', schema)
