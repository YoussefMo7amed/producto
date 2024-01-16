import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { NavBar, Footer } from "./Components/Components";
import { Home, Product, Products, Category, NotFound } from "./Pages/Pages";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { AllProductsProvider } from "./Contexts/AllProductsContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { CategoryProductsProvider } from "./Contexts/CategoryProductsContext";

function App() {
    return (
        <CategoryProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/Product/:productId"
                            element={
                                <ProductProvider>
                                    <Product />
                                </ProductProvider>
                            }
                        />
                        <Route
                            path="/Products"
                            element={
                                <AllProductsProvider>
                                    <Products />
                                </AllProductsProvider>
                            }
                        />
                        <Route
                            path="/Category/:categoryId"
                            element={
                                <CategoryProductsProvider>
                                    <Category />
                                </CategoryProductsProvider>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CategoryProvider>
    );
}

export default App;
