const Product = require("../models/Product.model");

// GET METHODS
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        // Fetch a specific product by ID from the database
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// POST METHODS
exports.createProduct = async (req, res) => {
    const { name, description, price, imgURL, categoryId } = req.body;
    // TODO : handle the `categoryId` validation
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            imgURL,
            categoryId,
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// PUT METHODS
exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { name, description, price, imgURL, categoryId } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                name,
                description,
                price,
                imgURL,
                categoryId,
            },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(201).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// DELETE METHODS
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        // Delete a specific Product by ID from the database
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

/*

TODO:
    Things need to be handled
    - Filter by category
    - Filter by price
        - minimum
        - maximum
    - Sorting by
        - Price
        - Name
*/
