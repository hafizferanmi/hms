import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true
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

export default mongoose.model('company', schema)
