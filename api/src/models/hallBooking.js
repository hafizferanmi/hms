import mongoose, { Schema } from 'mongoose'
import { PAYMENT_METHOD } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  hallId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  by: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
    default: PAYMENT_METHOD.CASH,
    enum: R.values(PAYMENT_METHOD)
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

export default mongoose.model('hallBooking', schema)
