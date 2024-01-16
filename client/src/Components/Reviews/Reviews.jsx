// Reviews.jsx

import React from "react";
import ReviewForm from "./ReviewForm";
import OldReviews from "./OldReviews";

const Reviews = ({ productId }) => {
    return (
        <div className="container mt-5">
            <ReviewForm productId={productId} />
            <OldReviews productId={productId} />
        </div>
    );
};

export default Reviews;
