import { createContext, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";

const CategoryProductsContext = createContext();

export const CategoryProductsProvider = ({
    children,
    categoryId: propCategoryId,
}) => {
    const { categoryId: urlCategoryId } = useParams();
    const categoryId = propCategoryId || urlCategoryId;

    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axios.get(
                    `${API_BASE_URL}/api/v1/categories/${categoryId}`
                );
                const categoryData = categoryResponse.data;
                setCategory(categoryData);
                
                if (!categoryData.products) {
                    setProducts([]);
                    return;
                }

                const productsData = categoryData.products.map((product) => ({
                    ...product,
                }));
                setProducts(productsData);
            } catch (error) {
                setProducts([]);
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <CategoryProductsContext.Provider value={{ category, products }}>
            {children}
        </CategoryProductsContext.Provider>
    );
};

export const useCategoryProducts = () => {
    const context = useContext(CategoryProductsContext);
    if (!context) {
        throw new Error(
            "useCategoryProducts must be used within a CategoryProductsProvider"
        );
    }
    return context;
};
