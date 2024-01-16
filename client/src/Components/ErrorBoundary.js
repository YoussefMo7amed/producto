import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const componentDidCatch = (error, errorInfo) => {
        setHasError(true);
        // You can also log the error to an error reporting service
        console.error("Error caught by error boundary:", error, errorInfo);
    };

    return hasError ? (
        // You can customize the error message or render a fallback UI here
        <h1>Something went wrong. Please try again later.</h1>
    ) : (
        // Render the child components if there's no error
        children
    );
};

export default ErrorBoundary;
