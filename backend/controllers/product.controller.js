import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: `Please provide all the fields` });
  }
  const newProduct = await Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ message: newProduct, success: true,message:`Successfully created` });
  } catch (error) {
    console.error(`Error in create product`, error.message);
    res.status(500).json({ success: false, message: `Server Error` });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length > 0) {
      res.status(200).json({
        message: "Products found successfully",
        data: products,
        success: true,
      });
    } else {
      res.status(201).json({
        message: "No Products found ",

        success: true,
      });
    }
  } catch (error) {
    console.log("Error in fetching products:", error.message);
    res.status(400).json({ success: false, message: "No products found" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid Product Id` });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: `Deleted successfully!`, success: true });
  } catch (error) {
    res.status(404).json({ message: `Error in deleting `, success: false });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid Product Id` });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: `Successfully updated product`,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: `Error updating product` });
  }
};
