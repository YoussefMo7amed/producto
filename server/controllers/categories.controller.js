const mongoose = require("mongoose");
const Category = require("../models/Category.model");
const { checkForDuplicates } = require("../utils/commonUtilities");
// Imported it to check productId validation
const Product = require("../models/Product.model");

// GET
exports.getAllCategories = async (req, res) => {
    try {
        // Fetch all categories from the database
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        // Fetch a specific category by ID from the database
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

async function checkProductIdValidation(productIds) {
    // Use map to create an array of promises
    const promises = productIds.map(async (productId) => {
        let found = await Product.findById(productId);
        console.log(found + "\\n");
        return found === null; // Return true if not found, false otherwise
    });

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Check if any productId was not found
    return results.some((result) => result);
}

// POST
exports.createCategory = async (req, res) => {
    const { name, description, productIds } = req.body;

    // Check for duplication in productIds
    if (checkForDuplicates(productIds)) {
        return res.status(400).json({ error: "Duplicate productIds found" });
    }

    if (await checkProductIdValidation(productIds)) {
        return res.status(400).json({ error: "Invalid productIds provided" });
    }

    try {
        // Create a new category in the database
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
        res.status(500).json({ message: "Internal Server Error" });
    }
};
// PUT
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { name, description } = req.body;

    try {
        // Update a specific category by ID in the database
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { name, description },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// DELETE
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        // Delete a specific category by ID from the database
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
