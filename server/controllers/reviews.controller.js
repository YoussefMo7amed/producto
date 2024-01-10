const Review = require("../models/Review.model");

// GET METHODS
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getReviewById = async (req, res) => {
    const reviewId = req.params.id;

    try {
        // Fetch a specific review by ID from the database
        const review = await Review.findById(reviewId);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getReviewsByProductId = async (req, res) => {
    const productId = req.params.productId;

    try {
        // Find reviews by productId
        const reviews = await Review.find({ productId: productId });

        if (reviews.length === 0) {
            return res
                .status(404)
                .json({ message: "No reviews found for the given productId" });
        }

        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// POST METHODS

// TODO
// Adding a middleware to handle video uploading
exports.createReview = async (req, res) => {
    let productId = req.params.productId;
    if (!productId) productId = req.body.productId;

    if (!productId)
        return res.status(400).json({ message: "You should Enter ProductId" });

    const { reviewerName, reviewerEmail, attachments, content } = req.body;
    try {
        const newReview = new Review({
            reviewerName,
            reviewerEmail,
            attachments,
            productId,
            content,
        });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// PUT METHODS
exports.updateReview = async (req, res) => {
    const reviewId = req.params.id;
    const { reviewerName, reviewerEmail, attachments, productId, content } =
        req.body;

    try {
        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            {
                reviewerName,
                reviewerEmail,
                attachments,
                productId,
                content,
            },
            { new: true }
        );
        if (!updatedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(201).json(updatedReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// DELETE METHODS
exports.deleteReview = async (req, res) => {
    const reviewId = req.params.id;

    try {
        // Delete a specific Review by ID from the database
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteReviewByProductId = async (req, res) => {
    const productId = req.params.productId;
    console.log(productId);
    try {
        // Delete the reviews by ProductId from the database
        const deletedReviews = await Review.deleteMany({
            productId: productId,
        });
        console.log(deletedReviews);
        if (deletedReviews.deletedCount === 0) {
            return res
                .status(404)
                .json({ message: "No review associated with this ProductId" });
        }

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
