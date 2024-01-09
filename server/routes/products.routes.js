const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

// Define routes
const ROUTER_NAME = "products";

router.get(`/${ROUTER_NAME}`, productsController.getAllProducts);
router.get(`/${ROUTER_NAME}/:id`, productsController.getProductById);

router.post(`/${ROUTER_NAME}`, productsController.createProduct);

router.put(`/${ROUTER_NAME}/:id`, productsController.updateProduct);

router.delete(`/${ROUTER_NAME}/:id`, productsController.deleteProduct);

module.exports = router;
