import mongoose, { Schema } from 'mongoose'
import { PAYMENT_METHOD } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
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
  occupation: {
    type: String,
    required: true
  },
  arrivingFrom: {
    type: String
  },
  purpose: {
    type: String,
    trim: true
  },
  meansOfTravel: {
    type: String
  },
  nextOfKin: {
    type: String
  },
  nextOfKinPhoneNo: {
    type: String
  },
  dateOfArrival: {
    type: String,
    required: true
  },
  dateOfDeparture: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
    default: PAYMENT_METHOD.CASH,
    enum: R.values(PAYMENT_METHOD)
  },
  checkedInBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  checkedOut: {
    type: Boolean,
    required: true,
    default: false
  },
  checkedOutBy: { type: Schema.Types.ObjectId },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

export default mongoose.model('checkIn', schema)
