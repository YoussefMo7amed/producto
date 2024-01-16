import { useContext, useState, useEffect } from "react";
import { ProductGrid, Sidebar } from "../../Components/Components";
import AllProductsContext from "../../Contexts/AllProductsContext";
import Notfound from "../Not Found/NotFound";

const Products = () => {
    const { products } = useContext(AllProductsContext);
    const { fetchData } = useContext(AllProductsContext);

    const [isFirstMount, setIsFirstMount] = useState(true);

    useEffect(() => {
        if (isFirstMount) {
            fetchData();
            setIsFirstMount(false);
        } else {
            console.log("Component is updating after the initial mount!");
        }
    }, [isFirstMount]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    {products.length === 0 ? (
                        <Notfound message={"No Products Found!"} />
                    ) : (
                        <ProductGrid products={products} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
