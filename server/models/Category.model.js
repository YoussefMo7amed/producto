const mongoose = require("mongoose");
const categorySchema = require("./Category.schema");

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
