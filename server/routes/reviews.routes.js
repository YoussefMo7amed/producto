const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews.controller");

// Define routes
const ROUTER_NAME = "reviews";

router.get(`/${ROUTER_NAME}`, reviewsController.getAllReviews);
router.get(`/${ROUTER_NAME}/:id`, reviewsController.getReviewById);
router.get(
    `/${ROUTER_NAME}/product/:productId`,
    reviewsController.getReviewsByProductId
);

router.post(`/${ROUTER_NAME}/:productId`, reviewsController.createReview);
router.post(`/${ROUTER_NAME}/`, reviewsController.createReview);

router.put(`/${ROUTER_NAME}/:id`, reviewsController.updateReview);

router.delete(`/${ROUTER_NAME}/:id`, reviewsController.deleteReview);
router.delete(
    `/${ROUTER_NAME}/product/:productId`,
    reviewsController.deleteReviewByProductId
);

module.exports = router;
