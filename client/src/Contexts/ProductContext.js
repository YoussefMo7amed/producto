import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export const ProductContext = createContext();

export const ProductProvider = ({ children, productId }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/api/v1/products/${productId}`
                );
                if (response.status === 500) {
                    setLoading(true);
                }
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(true);
            }
        };

        fetchProduct();
    }, [productId, axios]);

    return (
        <ProductContext.Provider value={{ product, loading }}>
            {children}
        </ProductContext.Provider>
    );
};
