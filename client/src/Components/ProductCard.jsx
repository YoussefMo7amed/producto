const ProductCard = ({ _id, name, description, imgURL, price, createdAt }) => {
    return (
        <a
            href={`/product/${_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div className="card mb-3 hover" style={{ maxWidth: "18rem" }}>
                <img
                    src={imgURL}
                    className="card-img-top"
                    alt={name}
                    style={{
                        height: "200px",
                        objectFit: "cover",
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title ">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: ${price}</p>
                </div>
                {!createdAt ? null : (
                    <div className="card-footer">
                        <small className="text-body-secondary">
                            {createdAt}
                        </small>
                    </div>
                )}
            </div>
        </a>
    );
};

export default ProductCard;
