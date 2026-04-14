import { User } from "../models/user.model";

export const createUser = async (payload: {
  name: string;
  email: string;
}) => {
  return await User.create(payload);
};

export const getUsers = async () => {
  return await User.find();
};