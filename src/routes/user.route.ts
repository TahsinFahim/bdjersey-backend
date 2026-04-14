import express from "express";
import * as userController from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createUserSchema } from "../validations/user.validation";



const router = express.Router();

router.post("/", validateRequest(createUserSchema), userController.createUser);
router.get("/", userController.getUsers);

export default router;