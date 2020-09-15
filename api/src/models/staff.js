import mongoose, { Schema } from 'mongoose'
import R from 'ramda'

import { STAFF_ROLES, STAFF_STATUS } from '../constants/staff'

const StaffSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  role: {
    type: String,
    required: true,
    enum: R.values(STAFF_ROLES)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: R.values(STAFF_STATUS)
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, { timestamps: true })

export default mongoose.model('staff', StaffSchema)
