const express = require("express");
const router = express.Router();

const orderHandler = require("./order.handler");

router.get("/", orderHandler.getOrders);

router.get("/:id", orderHandler.getOrderById);

router.post("/", orderHandler.createOrder);

router.put("/:id", orderHandler.updateOrder);

router.delete("/:id", orderHandler.deleteOrder);

module.exports = router;