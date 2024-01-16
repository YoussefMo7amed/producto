import { useCategoryProducts } from "../../Contexts/CategoryProductsContext";

import { ProductGrid } from "../../Components/Components";

let notFoundGif = "/Assets/Videos/not-found.gif";
 
const Category = () => {
    const { category, products } = useCategoryProducts();

    return (
        <div>
            <div className="container mt-4">
                {
                    <div key={category._id} className="mb-4">
                        <h1>{category.name}</h1>
                        <p className="lead">{category.description}</p>

                        <div className="row"></div>
                    </div>
                }
            </div>
            <div key={category._id + "p"}>
                {products.length === 0 ? (
                    <img
                        src={notFoundGif}
                        alt="Not Found"
                        className="img-fluid"
                    />
                ) : (
                    <ProductGrid products={products} />
                )}
            </div>
        </div>
    );
};

export default Category;
