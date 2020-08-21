import mongoose, { Schema } from 'mongoose'

const AdminSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String },
  password: {
    type: String
  }
}, { timestamps: true })

export default mongoose.model('admin', AdminSchema)
