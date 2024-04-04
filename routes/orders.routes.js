const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const OrderController = require('../controllers/users.controllers');

router.get("/",checkAuth,OrderController.getAll);
router.post("/add",checkAuth,OrderController.addOrder);
router.get("/:_id",checkAuth,OrderController.getSingleOrder);
router.put("/:_id", checkAuth,OrderController.updateOrder);
router.delete("/:_id", checkAuth,OrderController.deleteOrder);



module.exports = router;