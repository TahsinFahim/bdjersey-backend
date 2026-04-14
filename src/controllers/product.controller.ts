import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
  const result = await productService.createProduct(
    req.body,
    req.file 
  );

  res.status(201).json({
    success: true,
    data: result
  });
};

export const getProducts = async (_req: Request, res: Response) => {
  const result = await productService.getProducts();

  res.json({
    success: true,
    data: result
  });
};