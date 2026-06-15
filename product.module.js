const express = require("express");
const router = express.Router();

const productHandler = require("./product.handler");

router.get("/", productHandler.getProducts);

router.get("/:id", productHandler.getProductById);

router.post("/", productHandler.createProduct);

router.put("/:id", productHandler.updateProduct);

router.delete("/:id", productHandler.deleteProduct);

module.exports = router;