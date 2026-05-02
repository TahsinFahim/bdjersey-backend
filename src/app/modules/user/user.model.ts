import { model, Schema } from "mongoose";
import { IsActive, Role, type IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: String, required: true },
  picture: { type: String },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER,
  },
  isDeleted: { type: Boolean, default: false },
  isActive: {
    type: String,
    enum: Object.values(IsActive),
    default: IsActive.ACTIVE,
  },
});

export const User = model<IUser>("User", userSchema);
