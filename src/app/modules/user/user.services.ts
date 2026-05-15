import bcrypt from "bcryptjs";
import AppError from "../../errorHelpers/AppError.js";
import type { IUser } from "./user.interface.js";
import { User } from "./user.model.js";


const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  if (!email || !password) {
    throw new AppError(400, "Email and password are required");
  }

  const isUserExist = await User.findOne({ email });

  const hashPassword = await bcrypt.hash(password, 10);

  if (isUserExist) {
    throw new AppError(409, "User already exists");
  }

  const user = await User.create({
    email,
    password: hashPassword,
    ...rest,
  });

  return user;
};

const getAllUsers = async() =>{
  const users = await User.find({});
  const totalUsers = await User.countDocuments();
  return {
      success : true,
      data : users,
      meta: {
          total: totalUsers,
      }
  }
}

export const UserServices = {
  createUser, getAllUsers,
};
