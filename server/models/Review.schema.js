const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    reviewerName: {
        type: mongoose.SchemaTypes.String,
        required: true,
        maxLength: 20,
        minLength: 3,
    },
    reviewerEmail: {
        type: mongoose.SchemaTypes.String,
        validate: {
            validator: (value) => {
                // You can use a more robust email validation library here
                const emailRegex =
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailRegex.test(value);
            },
            message: "Invalid Email format",
        },
    },
    content: {
        type: mongoose.SchemaTypes.String,
        maxLength: 250,
    },
    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
        required: true,
    },
    attachments: {
        type: [mongoose.SchemaTypes.String],
        default: [],
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },
});

module.exports = reviewSchema;
