//or "http://localhost"
const API_URL = "";
// or 3001
const API_PORT = "";
// the one used to fetch the API
const API_BASE_URL = `${API_URL}` + (API_PORT == null ? null : ":" + API_PORT);

const REACT_BASE_URL = "http://localhost";
const REACT_PORT = 3000;
const REACT_APP_API_BASE_URL =
    `${REACT_BASE_URL}` + (REACT_PORT == null ? null : ":" + REACT_PORT);

export { API_BASE_URL, REACT_APP_API_BASE_URL };
