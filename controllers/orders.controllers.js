const ordersController = {};
const Orders = require('../models/orders.model');

ordersController.getAll = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: orders
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

ordersController.addOrder = async (req, res) => {
  try {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    res.status(200).json({
      code: 200,
      message: 'Order added successfully'
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

ordersController.getSingleOrder = async (req, res) => {
  try {
    const order = await Orders.findById(req.params._id);
    if (!order) {
      return res.status(404).json({
        code: 404,
        message: 'Order not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: order
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

ordersController.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Orders.findByIdAndDelete(req.params._id);
    if (!deletedOrder) {
      return res.status(404).json({
        code: 404,
        message: 'Order not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Order deleted successfully'
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

ordersController.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Orders.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({
        code: 404,
        message: 'Order not found'
      });
    }
    res.status(200).json({
      code: 200,
      message: 'Order updated successfully',
      data: updatedOrder
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

module.exports = ordersController;
