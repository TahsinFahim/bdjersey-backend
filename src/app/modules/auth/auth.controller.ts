import httpStatus from "http-status-codes"
import type { NextFunction, Request, Response } from "express"
import { AuthServices } from "./auth.service.js"
import { catchAsync } from "../../../utils/catchAsync.js"
import { sendResponse } from "../../../utils/sendResponse.js"

const credentialsLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialsLogin(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Logged In Successfully",
        data: loginInfo,
    })
})

export const AuthControllers = {
    credentialsLogin
}