const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    description: {
        type: mongoose.SchemaTypes.String,
    },
    productIDs: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Product",
        validate: {
            validator: async function (value) {
                // Check for duplicates in the array
                const isDuplicate = new Set(value).size !== value.length;
                if (isDuplicate) {
                    throw new Error("Duplicate ObjectId found in productIDs");
                }
            },
        },
    },
});

module.exports = categorySchema;
