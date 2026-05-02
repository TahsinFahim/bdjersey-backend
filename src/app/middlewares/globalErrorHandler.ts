import type { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError.js";
import { envVars } from "../config/env.js";
import { ZodError } from "zod";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  let statusCode = 500;
  let message = "Something Went Wrong!!";

  // ✅ Mongo Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;

    const field = Object.keys(err.keyValue)[0];
    message = `${field} already exists`;
  }

  // ✅ AppError
  else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

    // ✅ Zod Error (IMPORTANT)
  else if (err instanceof ZodError) {
    statusCode = 400;

    return res.status(statusCode).json({
      success: false,
      message: "Validation Error",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  // ✅ Mongoose Validation Error
  else if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Validation Error";
  }

  // ✅ Generic Error
  else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: envVars.NODE_ENV === "development" ? err.stack : undefined,
  });
};