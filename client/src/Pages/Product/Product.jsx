import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductProvider, ProductContext } from "../../Contexts/ProductContext";
import { ReviewsProvider } from "../../Contexts/ReviewsContext";
import Reviews from "../../Components/Reviews/Reviews";

const Product = () => {
    const { productId } = useParams();

    return (
        <div className="container row-2">
            {productId && (
                <ProductProvider productId={productId}>
                    <ProductDetails />
                </ProductProvider>
            )}

            <ReviewsProvider>
                <div className="container">
                    <Reviews productId={productId} />
                </div>
            </ReviewsProvider>
        </div>
    );
};

const ProductDetails = () => {
    const { product, loading } = useContext(ProductContext);

    if (loading) {
        return (
            <div className="container mt-5">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                    <div className="card-body">
                        <p className="card-text">Loading.... </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container mt-5">
                {product ? (
                    <div className="card">
                        <div className="row">
                            <div className="col-md-4 ">
                                <img
                                    src={product.imgURL}
                                    className="card-img-top "
                                    alt={product.name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.name}
                                    </h5>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <p className="card-text">
                                        Price: ${product.price}
                                    </p>
                                    <p className="card-text">
                                        Category:
                                        <Link
                                            to={`/category/${product.categoryId}`}
                                        >
                                            {product.categoryName}
                                        </Link>
                                    </p>
                                    <p className="card-text">
                                        Created At:{" "}
                                        {new Date(
                                            product.createdAt
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Product;
