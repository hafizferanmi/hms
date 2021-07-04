import mongoose, { Schema } from "mongoose";
import R from "ramda";
import MongooseDelete from "mongoose-delete";

import { STAFF_ROLES, STAFF_STATUS } from "../constants/staff";

const StaffSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "company",
    },
    role: {
      type: String,
      required: true,
      enum: R.values(STAFF_ROLES),
    },
    displayImage: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: R.values(STAFF_STATUS),
    },
    resetPasswordToken: String,
    resetPasswordTokenExpires: Number,
    createdBy: { type: Schema.Types.ObjectId },
    updatedBy: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

StaffSchema.plugin(MongooseDelete, { deletedBy: true, deletedAt: true });

export default mongoose.model("staff", StaffSchema);
