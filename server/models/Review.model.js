const mongoose = require("mongoose");
const reviewSchema = require("./Review.schema");

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
