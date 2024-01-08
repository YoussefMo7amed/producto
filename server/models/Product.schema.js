const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        min: 10,
    },
    imgURL: {
        type: mongoose.SchemaTypes.String,
        required: true,
        validate: {
            validator: (value) => {
                // will use middleware lib later
                const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                return urlRegex.test(value);
            },
            message: "Invalid URL format",
        },
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },
});

module.exports = productSchema;
