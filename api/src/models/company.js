import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  email: String,
  sendMailDuringCheckIn: {
    type: Boolean,
    default: true
  },
  sendSMSDuringCheckIn: {
    type: Boolean,
    default: false
  },
  sendMailDuringCheckOut: {
    type: Boolean,
    default: true
  },
  sendSMSDuringCheckOut: {
    type: Boolean,
    default: false
  },
  smsContent: {
    checkIn: String,
    checkOut: String
  },
  mailContent: {
    checkIn: String,
    checkOut: String
  },
  subdomain: {
    type: String,
    required: true,
    match: /[0-9A-Za-z-]+/,
    unique: true
  }
}, {
  timestamps: true
})

schema.plugin(MongooseDelete, { deletedBy: true, deletedAt: true })

export default mongoose.model('company', schema)
