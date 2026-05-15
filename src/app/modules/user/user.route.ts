import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";
import { createUserZodSchema } from "./user.validation.js";
import { UserControllers } from "./user.controller.js";
import { checkAuth } from "../../middlewares/checkAuth.js";
import { Role } from "./user.interface.js";


const router = express.Router();

router.post("/register", validateRequest(createUserZodSchema), UserControllers.createUser); 
router.get("/all-users", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), UserControllers.getAllUsers)

export default router;