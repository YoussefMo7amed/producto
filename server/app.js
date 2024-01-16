const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// Configuration variables
const DB_URI = process.env.DB_URI;
const DB_OPTIONS = JSON.parse(process.env.DB_OPTIONS);
const PORT = process.env.PORT;
const Host = process.env.HOST;
const serverHost = `${Host}:${PORT}`;

// Read allowed origins from the JSON file
const allowedOriginsPath = path.join(__dirname, "allowed-origins.json");
const allowedOrigins = JSON.parse(fs.readFileSync(allowedOriginsPath, "utf8"));
allowedOrigins.push(serverHost);
console.log(allowedOrigins);

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            allowedOrigins.push(origin);
            callback(null, true);
        }
    },
};

// Connect to MongoDB
mongoose
    .connect(DB_URI, DB_OPTIONS)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

// API version
const CURRENT_API_VERSION = "v1";

const app = express();

// Use Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Import routes
const categoriesRoutes = require("./routes/categories.routes");
const productsRoutes = require("./routes/products.routes");
const reviewsRoutes = require("./routes/reviews.routes");

// Use routes with consistent API versioning
app.use(`/api/${CURRENT_API_VERSION}/`, categoriesRoutes);
app.use(`/api/${CURRENT_API_VERSION}/`, productsRoutes);
app.use(`/api/${CURRENT_API_VERSION}/`, reviewsRoutes);

//
const uploadsRoutes = require("./routes/uploads.routes");
app.use("/server/uploads", uploadsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
