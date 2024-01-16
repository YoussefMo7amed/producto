// ReviewForm.jsx

import React, { useState } from "react";
import { useReviews } from "../../Contexts/ReviewsContext";
const ReviewForm = ({ productId }) => {
    const { handleReviewSubmit } = useReviews();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [video, setVideo] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReviewData = {
            name,
            email,
            review,
            video,
            productId,
        };

        // Assuming handleReviewSubmit returns a promise
        await handleReviewSubmit(newReviewData);

        setName("");
        setEmail("");
        setReview("");
        setVideo([]);
        setIsSubmitted(true); // Set the submission status to true after successful submission
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=""
            encType="multipart/form-data"
        >
            <h3>Add Your review:</h3>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    Enter your name
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    Enter your email
                </span>
                <input
                    type="email"
                    className="form-control"
                    placeholder="yourname@example.com"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">Your review</span>
                <textarea
                    className="form-control"
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    aria-label="User Review"
                ></textarea>
            </div>

            <div className="input-group mb-3">
                <label
                    htmlFor="video"
                    className="input-group-text"
                    for="inputGroupFile01"
                >
                    Upload video review
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="video"
                    accept="video/*"
                    multiple
                    onChange={(e) => setVideo(e.target.files)}
                />

                <div id="uploadHelp" className="input-group mb-3 form-text">
                    You should upload videos with 5MB max
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit Review
            </button>
            {isSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                    Review submitted successfully!
                </div>
            )}
        </form>
    );
};

export default ReviewForm;
