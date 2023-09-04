const { Router } = require("express");
const orderRouter = Router();
const getAllOrder = require("../../Controllers/Order/getAllOrder");
const getOrderById = require("../../Controllers/Order/getOrderById");
const createOrder = require("../../Controllers/Order/createOrder");
const updateOrder = require("../../Controllers/Order/updateOrder");
const deleteOrder = require("../../Controllers/Order/deleteOrder");
const verifyAdmin = require("../../Assessments/verifyAdmin");
const verifyToken = require("../../Assessments/verifyToken");

orderRouter.get("/", verifyAdmin, getAllOrder);
orderRouter.get("/:id_order", verifyToken, getOrderById);
orderRouter.post("/", verifyToken, createOrder);
orderRouter.put("/:id_order", verifyToken, updateOrder);
orderRouter.delete("/:id_order", verifyToken, deleteOrder);

module.exports = orderRouter;
