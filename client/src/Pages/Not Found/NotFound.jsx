import { Link } from "react-router-dom";
let notFoundGif = "/Assets/Videos/not-found.gif";

const NotFound = ({ message }) => {
    return (
        <div className="container text-center mt-5">
            {message === null ? (
                <h2 className="display-4">{message}</h2>
            ) : (
                <div>
                    <h2 className="display-4">404 - Not Found</h2>
                    <p className="lead">
                        The page you are looking for does not exist.
                    </p>
                </div>
            )}

            <img src={notFoundGif} alt="Not Found" className="img-fluid" />
            <p className="mt-3">
                Go back to <Link to="/">home</Link>.
            </p>
        </div>
    );
};

export default NotFound;
