import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    brand: z.string(),
    price: z.number(),
    string: z.string(),

    size: z.array(z.enum(["S", "M", "L", "XL"])), // 👈 array validation

    inStock: z.boolean().optional()
  })
});