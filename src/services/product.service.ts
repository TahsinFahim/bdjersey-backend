
import { Product } from "../models/product.model";
import { IProduct } from "../type/product.type";
import { uploadToCloudinary } from "../utils/cloudinary";


export const createProduct = async (
  payload: IProduct,
  file?: Express.Multer.File
) => {
  let imageUrl = "";


  if (file) {
    const uploaded = await uploadToCloudinary(file.buffer);
    imageUrl = uploaded.secure_url;
  }

  const productData = {
    ...payload,
    image: imageUrl
  };

  return await Product.create(productData);
};

export const getProducts = async () => {
  return await Product.find();
};