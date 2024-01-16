import React from "react";
import { useCategoryProducts } from "../../Contexts/CategoryProductsContext";
import { Link } from "react-router-dom";

const BannerModule = ({ categoryId }) => {
    const { category, products } = useCategoryProducts();
    return (
        <div className="container mt-4" key={categoryId}>
            <h3 className="text-start mb-4">{category.name + " Section"}</h3>
            <div className="row">
                {products.slice(0, 5).map((product, index) => (
                    <div key={index} className="col-md-2 mb-4">
                        <div className="card" style={{ height: "200px" }}>
                            <Link
                                to={`/product/${product._id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <img
                                    src={product.imgURL}
                                    className="card-img-top img-fluid"
                                    alt={product.name}
                                    style={{
                                        height: "150px",
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                />
                                <div class="card-body">
                                    <h6
                                        className="card-title"
                                        style={{
                                            height: "20px",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                            "white-space": "nowrap",
                                        }}
                                    >
                                        {product.name}
                                    </h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
                <div className="col-md-2 mb-4">
                    <div
                        className="card d-flex flex-column justify-content-center align-items-center"
                        style={{ height: "200px" }}
                    >
                        <Link
                            to={`/category/${category._id}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <p className="card-text">
                                Explore all {category.name} products
                            </p>
                            <div className="card-body">
                                <h6 className="card-title">See More</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerModule;
