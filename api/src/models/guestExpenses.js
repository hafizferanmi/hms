import mongoose, { Schema } from 'mongoose'
import { PAYMENT_METHOD, PAYMENT_STATUS } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  checkInId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  typeOfExpense: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  payment: {
    status: {
      type: String,
      enum: R.values(PAYMENT_STATUS)
    },
    ammount: {
      type: Number,
      required: true
    },
    method: {
      type: String,
      enum: R.values(PAYMENT_METHOD)
    },
    currency: {
      type: String,
      required: true,
      default: 'NGN'
    }
  },
  note: {
    type: String
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

export default mongoose.model('guestExpenses', schema)
