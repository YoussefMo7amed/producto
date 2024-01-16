import React, { useState, useEffect } from "react";
import "./Home.css";
import { BannerModule } from "../../Components/Components";
import { CategoryProductsProvider } from "../../Contexts/CategoryProductsContext";

const Home = ({ categories }) => {
    const ImagesPath = "/Assets/Images/";
    const [sliderImages, setSliderImages] = useState([
        "1.png",
        "2.png",
        "3.png",
        "4.png",
    ]);

    useEffect(() => {
        addImagesPath();
    }, []);

    const addImagesPath = () => {
        const newPaths = sliderImages.map((image) => ImagesPath + image);
        setSliderImages(newPaths);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8"></div>
                <div
                    id="imageSlider"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {sliderImages.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item${
                                    index === 0 ? " active" : ""
                                }`}
                            >
                                <img
                                    src={image}
                                    className="d-block w-100 img-fluid"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev shadow-md"
                        type="button"
                        data-bs-target="#imageSlider"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next shadow-md"
                        type="button"
                        data-bs-target="#imageSlider"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <CategoryProductsProvider
                    categoryId={"659c8311e39c4a75c72b29a9"}
                >
                    <BannerModule />
                </CategoryProductsProvider>
                <CategoryProductsProvider
                    categoryId={"659c8311e39c4a75c72b29a8"}
                >
                    <BannerModule />
                </CategoryProductsProvider>
                <CategoryProductsProvider
                    categoryId={"659e760c0f4e1dab8976962e"}
                >
                    <BannerModule />
                </CategoryProductsProvider>
            </div>
            <button type="button" class="btn btn-outline-secondary">
                <a
                    href="/products"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    See All Products
                </a>
            </button>
        </div>
    );
};

export default Home;
