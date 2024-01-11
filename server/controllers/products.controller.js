const Product = require("../models/Product.model");

function handleSort({ sort }) {
    // TODO - Handle by Date (when adding it into database)
    const allowedSortValues = [
        "price:asc",
        "price:desc",
        "name:asc",
        "name:desc",
    ];
    if (allowedSortValues.includes(sort)) {
        const [key, order] = sort.split(":");
        const sortObject = {};
        sortObject[key] = order === "asc" ? 1 : -1;
        return sortObject;
    } else if (
        allowedSortValues.some((value) => sort.includes(value.split(":")[0]))
    ) {
        const sortObject = {};
        sortObject[sort] = 1;
        return sortObject;
    } else {
        return null;
    }
}

function handleFilter({ query }) {
    const categoryId = query.categoryId;
    const minPrice = parseInt(query.minPrice);
    const maxPrice = parseInt(query.maxPrice);
    const filterQuery = {};

    if (categoryId) {
        filterQuery.categoryId = categoryId;
    }

    if (minPrice || maxPrice) {
        filterQuery.price = {};
        if (minPrice) {
            filterQuery.price.$gte = minPrice;
        }
        if (maxPrice) {
            filterQuery.price.$lte = maxPrice;
        }
    }

    return filterQuery;
}

// GET METHODS
exports.getAllProducts = async (req, res) => {
    let query = handleFilter(req);
    const sort = handleSort(req.query);

    try {
        let products;
        if (sort) {
            products = await Product.find(query).sort(sort);
        } else {
            products = await Product.find(query);
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
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

exports.getProductsByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const products = await Product.find()
            .where("categoryId")
            .equals(categoryId);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
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
