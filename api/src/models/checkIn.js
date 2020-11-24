import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'
import { PAYMENT_METHOD } from '../constants/misc'
import R from 'ramda'

const schema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'room',
    required: true
  },
  guest: {
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
  dateOfArrival: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateOfDeparture: {
    type: Date
  },
  note: {
    type: String
  },
  checkedInBy: {
    type: Schema.Types.ObjectId,
    ref: 'staff',
    required: true
  },
  checkedOut: {
    type: Boolean,
    required: true,
    default: false
  },
  checkedOutBy: {
    type: Schema.Types.ObjectId,
    ref: 'staff'
  },
  checkedOutOn: {
    type: Date
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

schema.plugin(MongooseDelete, { deletedBy: true, deletedAt: true })

export default mongoose.model('checkIn', schema)
