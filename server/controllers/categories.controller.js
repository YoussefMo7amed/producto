const mongoose = require("mongoose");
const Category = require("../models/Category.model");
const { checkForDuplicates } = require("../utils/commonUtilities");
// Imported it to check productId validation
const Product = require("../models/Product.model");

// GET
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error(error);

        let message = error.message || "Internal Server Error";

        res.status(500).json({ message });
    }
};

exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(category);
    } catch (error) {
        console.error(error);

        let message = error.message || "Internal Server Error";

        res.status(500).json({ message });
    }
};

async function checkProductIdValidation(productIds) {
    const promises = productIds.map(async (productId) => {
        let found = await Product.findById(productId);
        return found === null;
    });

    const results = await Promise.all(promises);

    return results.some((result) => result);
}

// POST
exports.createCategory = async (req, res) => {
    const { name, description, productIds } = req.body;

    if (checkForDuplicates(productIds)) {
        return res.status(400).json({ error: "Duplicate productIds found" });
    }

    if (await checkProductIdValidation(productIds)) {
        return res.status(400).json({ error: "Invalid productIds provided" });
    }

    try {
        const newCategory = new Category({
            name,
            description,
            productIds: productIds.map(
                (productId) => new mongoose.Types.ObjectId(productId)
            ),
        });

        const savedCategory = await newCategory.save();

        res.status(201).json(savedCategory);
    } catch (error) {
        console.error(error);

        let message = error.message || "Internal Server Error";

        res.status(500).json({ message });
    }
};

// PUT
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { name, description, productIds } = req.body;

    try {
        const existingCategory = await Category.findById(categoryId);

        if (!existingCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        const newProductIds = productIds
            ? productIds.map(
                  (productId) => new mongoose.Types.ObjectId(productId)
              )
            : [];

        const updatedProductIds = [
            ...new Set([...existingCategory.productIds, ...newProductIds]),
        ];

        if (checkForDuplicates(updatedProductIds)) {
            return res
                .status(400)
                .json({ error: "Duplicate productIds found" });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { name, description, productIds: updatedProductIds },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(updatedCategory);
    } catch (error) {
        console.error(error);

        let message = error.message || "Internal Server Error";

        res.status(500).json({ message });
    }
};

// DELETE
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error(error);

        let message = error.message || "Internal Server Error";

        res.status(500).json({ message });
    }
};
