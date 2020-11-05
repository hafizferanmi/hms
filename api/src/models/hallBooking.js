import mongoose, { Schema } from 'mongoose'
import { PAYMENT_METHOD } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  hall: {
    type: Schema.Types.ObjectId,
    required: true
  },
  organizer: {
    name: String,
    phone: String,
    email: String,
    website: String
  },
  booking: {
    from: {
      date: Date,
      time: String
    },
    to: {
      date: Date,
      time: String
    }
  },
  payment: {
    ammount: {
      type: Number,
      required: true
    },
    method: {
      type: String,
      required: true,
      default: PAYMENT_METHOD.CASH,
      enum: R.values(PAYMENT_METHOD)
    },
    currency: {
      type: String,
      required: true,
      default: 'NGN'
    }
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
