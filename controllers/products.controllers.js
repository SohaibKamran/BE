const productsController = {};
const Products = require('../models/products.model');

productsController.getAll = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: products
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};

productsController.addProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log("🚀 ~ req.body:", req.body)
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.status(200).json({
      code: 200,
      message: 'Product added successfully'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};

productsController.getSingleProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params._id);
    if (!product) {
      return res.status(404).json({
        code: 404,
        message: 'Product not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: product
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};

productsController.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(req.params._id);
    if (!deletedProduct) {
      return res.status(404).json({
        code: 404,
        message: 'Product not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};

productsController.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({
        code: 404,
        message: 'Product not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Product updated successfully',
      data: updatedProduct
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = productsController;
