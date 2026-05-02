import type { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services.js";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserServices.createUser(req.body);

    res.json({
      success: true,
      message: "created",
      data: user,
    });
  } catch (error) {
    
    next(error); // ❌ missing or not working
  }
};

export default createUser;
