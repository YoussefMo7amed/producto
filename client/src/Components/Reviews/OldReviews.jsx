// OldReviews.js

import React, { useEffect } from "react";
import { useReviews } from "../../Contexts/ReviewsContext";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";

const OldReviews = ({ productId }) => {
    let { reviews, setProductId } = useReviews();

    useEffect(() => {
        setProductId(productId);
    }, [productId, setProductId]);

    reviews = [...reviews].reverse();
    return (
        <div className="mt-4">
            <h4 className="mb-4">Old Reviews:</h4>
            <div className="list-group">
                {reviews.map((review) => (
                    <div key={review._id} className="list-group-item mb-4">
                        <p className="fw-bold mb-1">{review.reviewerName}</p>
                        <p className="text-muted mb-1">
                            {review.reviewerEmail}
                        </p>
                        <p className="mb-1">{review.content}</p>
                        {review.attachments && (
                            <div>
                                <h6 className="fw-bold mb-1">Video Review:</h6>
                                <ul className="list-unstyled">
                                    {review.attachments.map(
                                        (attachment, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={attachment}
                                                    target="_blank"
                                                >
                                                    Video Review {index + 1}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OldReviews;
