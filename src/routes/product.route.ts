import express from "express";
import * as productController from "../controllers/product.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { createProductSchema } from "../validations/product.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(createProductSchema),
  productController.createProduct
);

router.get("/", productController.getProducts);

export default router;