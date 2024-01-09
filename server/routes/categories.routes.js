const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller");

// Define routes
const ROUTER_NAME = "categories";

router.get(`/${ROUTER_NAME}`, categoriesController.getAllCategories);
router.get(`/${ROUTER_NAME}/:id`, categoriesController.getCategoryById);

router.post(`/${ROUTER_NAME}`, categoriesController.createCategory);

router.put(`/${ROUTER_NAME}/:id`, categoriesController.updateCategory);

router.delete(`/${ROUTER_NAME}/:id`, categoriesController.deleteCategory);

module.exports = router;
