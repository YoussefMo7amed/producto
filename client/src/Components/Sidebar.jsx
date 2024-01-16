import React, { useState, useContext } from "react";
import AllProductsContext from "../Contexts/AllProductsContext";
import CategoryContext from "../Contexts/CategoryContext";

const Sidebar = () => {
    const [MIN_PRICE, MAX_PRICE] = [10, 1000000];
    const [priceRange, setPriceRange] = useState({
        min: MIN_PRICE,
        max: MAX_PRICE,
    });
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSort, setSelectedSort] = useState("All");
    const { categories } = useContext(CategoryContext);
    const { fetchData } = useContext(AllProductsContext);

    const handleFetchData = () => {
        const queryParams = {
            categoryId:
                selectedCategory !== "All" ? selectedCategory : undefined,
            minPrice: priceRange.min,
            maxPrice: priceRange.max,
            sort: selectedSort !== "All" ? selectedSort : undefined,
        };

        fetchData(queryParams);
    };

    if (!fetchData) {
        console.log("hello world");
    }

    let sortOptions = ["price:asc", "price:desc", "name:asc", "name:desc"];

    return (
        <>
            <div
                className="d-flex flex-column p-3 text-white bg-dark"
                style={{ width: "280px", height: "100vh" }}
            >
                <h3 className="mb-4">Filtering</h3>
                <form className="form-floating">
                    {/* Filter By Category */}
                    <div className="mb-3">
                        <label
                            htmlFor="CategorySelect"
                            className="form-label Left-aligned"
                        >
                            By Category
                        </label>
                        <select
                            className="form-select Left-aligned"
                            id="CategorySelect"
                            aria-label="Select Products by Category"
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                        >
                            <option value="All">All</option>
                            {categories.map((category) => (
                                <option
                                    key={category._id}
                                    value={category._id}
                                    className="dropdown-item"
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sort By */}
                    <div className="mb-3">
                        <label
                            htmlFor="SortSelect"
                            className="form-label Left-aligned"
                        >
                            Sort By
                        </label>
                        <select
                            className="form-select Left-aligned"
                            id="SortSelect"
                            aria-label="Sort Products"
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                        >
                            <option value="All">All</option>
                            {sortOptions.map((sort, index) => (
                                <option
                                    key={index}
                                    value={sort}
                                    className="dropdown-item"
                                >
                                    {sort}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="mb-3">
                        <label className="form-label Left-aligned">
                            Price Range:
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Min"
                                value={priceRange.min}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        min: e.target.value,
                                    })
                                }
                            />
                            <span className="input-group-text">to</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Max"
                                value={priceRange.max}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        max: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleFetchData}
                    >
                        GO
                    </button>
                </form>
            </div>
        </>
    );
};

export default Sidebar;
