const mongoose = require("mongoose");
const productSchema = require("./Product.schema");

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
