import mongoose, { Schema } from "mongoose";
import { IProduct } from "../type/product.type";
import { string } from "zod";

const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true},
        size: [
            {
                type: String,
                enum: ["S", "M", "L", "XL"],
                required: true
            }
        ],
        inStock: { type: Boolean, default: true }
    },
    { timestamps: true },
)
export const Product = mongoose.model<IProduct>("Product", productSchema);