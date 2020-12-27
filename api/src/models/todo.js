import mongoose, { Schema } from 'mongoose'
import { TODOS_REMINDER_AT } from '../constants/misc'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date
  },
  toBeCompletedAt: {
    type: Date
  },
  reminderAt: {
    type: String,
    default: TODOS_REMINDER_AT.FIFTEEN_MIN_BEFORE,
    enum: Object.values(TODOS_REMINDER_AT)
  },
  pinned: {
    type: Boolean,
    default: false
  },
  starred: {
    type: Boolean,
    default: false
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

export default mongoose.model('todo', schema)
