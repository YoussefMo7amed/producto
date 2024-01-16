import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {products
                    ? products.map((product, index) => (
                          <div key={index} className="col">
                              <ProductCard
                                  _id={product._id}
                                  name={product.name}
                                  description={product.description}
                                  imgURL={product.imgURL}
                                  price={product.price}
                              />
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default ProductGrid;
