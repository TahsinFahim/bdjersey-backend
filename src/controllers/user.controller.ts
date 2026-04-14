import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);

  res.status(201).json({
    success: true,
    data: result
  });
};

export const getUsers = async (_req: Request, res: Response) => {
  const result = await userService.getUsers();

  res.json({
    success: true,
    data: result
  });
};