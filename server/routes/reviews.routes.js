const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews.controller");

// Define routes
const ROUTER_NAME = "categories";

router.get(`/${ROUTER_NAME}`, reviewsController.getAllReviews);
router.get(`/${ROUTER_NAME}/:id`, reviewsController.getReviewById);

router.post(`/${ROUTER_NAME}`, reviewsController.createReview);

router.put(`/${ROUTER_NAME}/:id`, reviewsController.updateReview);

router.delete(`/${ROUTER_NAME}/:id`, reviewsController.deleteReview);

module.exports = router;
