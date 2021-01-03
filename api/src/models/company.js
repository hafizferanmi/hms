import mongoose, { Schema } from 'mongoose'
import MongooseDelete from 'mongoose-delete'
import { COMPANY_SIZE } from '../constants/misc'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String,
  email: String,
  phone: String,
  website: String,
  size: {
    type: String,
    enum: Object.values(COMPANY_SIZE)
  },
  idNumber: String,
  taxNumber: String,
  address: {
    street: String,
    suite: String,
    city: String,
    state: String,
    postalCode: String,
    country: {
      type: Object
    }
  },
  currency: String,
  slogan: String,
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
