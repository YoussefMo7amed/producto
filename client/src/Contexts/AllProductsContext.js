import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { API_BASE_URL } from "../config";

const AllProductsContext = createContext();

export const AllProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (queryParams) => {
        try {
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await axios.get(
                `${API_BASE_URL}/api/v1/products/?${queryString}`
            );
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };

    return (
        <AllProductsContext.Provider value={{ products, loading, fetchData }}>
            {children}
        </AllProductsContext.Provider>
    );
};

export default AllProductsContext;
