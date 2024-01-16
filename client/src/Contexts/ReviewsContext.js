// ReviewsContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { API_BASE_URL } from "../config";

const ReviewsContext = createContext();

export const useReviews = () => {
    return useContext(ReviewsContext);
};

export const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                if (productId) {
                    const response = await axios.get(
                        `${API_BASE_URL}/api/v1/reviews/product/${productId}`
                    );
                    setReviews(response.data);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [productId]);

    const handleReviewSubmit = async (newReviewData) => {
        try {
            const { name, email, review, video, productId } = newReviewData;

            const formData = new FormData();
            formData.append("reviewerName", name);
            formData.append("reviewerEmail", email);
            formData.append("content", review);
            formData.append("productId", productId);

            if (video) {
                for (let i = 0; i < video.length; i++) {
                    formData.append("attachments", video[i]);
                }
            }

            const response = await axios.post(
                `${API_BASE_URL}/api/v1/reviews/${productId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setReviews([...reviews, response.data]);
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };
    return (
        <ReviewsContext.Provider
            value={{ reviews, setProductId, handleReviewSubmit }}
        >
            {children}
        </ReviewsContext.Provider>
    );
};
export default ReviewsContext;
