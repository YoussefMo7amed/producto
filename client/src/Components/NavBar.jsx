import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CategoryContext from "../Contexts/CategoryContext";

const NavBar = () => {
    const { categories } = useContext(CategoryContext);

    const renderCategoryItems = () => {
        return categories.map((category) => (
            <li key={category._id}>
                <Link
                    to={`/Category/${category._id}`}
                    className="dropdown-item"
                >
                    {category.name}
                </Link>
            </li>
        ));
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img
                        src="/Logo.svg"
                        alt="Producto website logo"
                        width="75"
                        height="50"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </span>
                            <ul className="dropdown-menu">
                                {renderCategoryItems()}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                All Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
