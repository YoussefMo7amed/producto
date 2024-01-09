const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    description: {
        type: mongoose.SchemaTypes.String,
    },
    productIds: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Product",
    },
});

module.exports = categorySchema;
