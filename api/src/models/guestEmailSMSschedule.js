import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'
import { SCHEDULE_FREQUENCY, GUEST_SCHEDULE_RECIEVER } from '../constants/misc'

const schema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  smsTemplate: {
    type: Schema.Types.ObjectId
  },
  sendSMS: {
    type: Boolean,
    default: false
  },
  emailTemplate: {
    type: Schema.Types.ObjectId
  },
  sendTo: {
    files: {
      type: Array
    },
    reciever: {
      type: Array,
      enum: Object.values(GUEST_SCHEDULE_RECIEVER)
    },
    custom: {
      from: {
        type: Date
      },
      to: {
        type: Date
      }
    }
  },
  sendEmail: {
    type: Boolean,
    default: true
  },
  active: {
    type: Boolean,
    default: false
  },
  activatedOn: {
    type: Date
  },
  deactivatedOn: {
    type: Date
  },
  type: {
    type: String,
    enum: Object.values(SCHEDULE_FREQUENCY)
  },
  nextScheduleTime: {
    type: Date
  },
  meta: {
    day: String, // Mon, Tues ...
    date: String, // 1 - 31
    time: String, // hh:mm
    week: String, // 1-4
    month: String, // Jan ....
    year: String
  },
  createdBy: { type: Schema.Types.ObjectId },
  updatedBy: { type: Schema.Types.ObjectId }
}, {
  timestamps: true
})

schema.plugin(MongooseDelete, { deletedBy: true, deletedAt: true })

export default mongoose.model('guestEmailSMSschedule', schema)
