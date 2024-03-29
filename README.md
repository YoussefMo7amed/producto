# Producto

<img src="Logo.svg" alt="Logo" width="100">

Simple product list and product details webpages with both frontend and backend components.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Bug Reporting](#bug-reporting)

## Description

This project provides webpages for a simple product list and product details. It consists of both frontend and backend components. The backend is built using Node.js, Express.js, and MongoDB following the MVC architecture, while the frontend is developed using React.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YoussefMo7amed/producto.git
   ```

2. Navigate to the server directory for backend setup:

   ```bash
   cd producto/server
   ```

3. Rename the `.env temp` file to `.env` and modify the configurations:

   ```
   DB_URI=your_mongodb_uri
   DB_OPTIONS=
   HOST=host_uri
   PORT=your_backend_port
   ...
   ```

4. Navigate to the client directory for frontend setup:

   ```bash
   cd ../client/src
   ```

5. Modify the `config.js` file configuration:

   ```javascript
   const config = {
     apiBaseUrl: 'your_backend_base_url',
     // Add other frontend configurations as needed
   };

   export default config;
   ```

6. Install dependencies for both frontend and backend:

    ```bash
    # for the frontend
   $ cd ../client/src
   $ npm install
   ```

    ```bash
    # for the backend
   $ cd ../server/
   $ npm install
   ```

7. Start the application:
   - Backend: In the `server` directory, run `npm start`.
   - Frontend: In the `client` directory, run `npm start`.

## Usage

- Visit [localhost:your_frontend_port](http://localhost:your_frontend_port) in your web browser to access the application.

## Configuration

- Backend: Modify the `.env` file in the `server` directory for backend configuration.
- Frontend: Modify the `config.js` file in the `client/src` directory for frontend configuration.

## Dependencies

## Dependencies

### Backend Dependencies

- [@firebase/app](https://www.npmjs.com/package/@firebase/app) - Version ^0.9.25
- [@firebase/storage](https://www.npmjs.com/package/@firebase/storage) - Version ^0.12.0
- [body-parser](https://www.npmjs.com/package/body-parser) - Version ^1.20.2
- [cors](https://www.npmjs.com/package/cors) - Version ^2.8.5
- [express](https://www.npmjs.com/package/express) - Version ^4.18.2
- [firebase](https://www.npmjs.com/package/firebase) - Version ^10.7.1
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) - Version ^2.1.2
- [fs](https://www.npmjs.com/package/fs) - Version ^0.0.1-security
- [mongoose](https://www.npmjs.com/package/mongoose) - Version ^8.1.0
- [multer](https://www.npmjs.com/package/multer) - Version ^1.4.5-lts.1
- [node-cache](https://www.npmjs.com/package/node-cache) - Version ^5.1.2
- [nodemon](https://www.npmjs.com/package/nodemon) - Version ^3.0.3
- [path](https://www.npmjs.com/package/path) - Version ^0.12.7
- [dotenv](https://www.npmjs.com/package/dotenv) (Dev Dependency) - Version ^16.3.1

### Frontend Dependencies

- [axios](https://www.npmjs.com/package/axios) - Version ^1.6.5
- [bootstrap](https://www.npmjs.com/package/bootstrap) - Version ^5.2.3
- [dotenv](https://www.npmjs.com/package/dotenv) - Version ^16.3.1
- [react](https://www.npmjs.com/package/react) - Version ^18.2.0
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) - Version ^2.9.2
- [react-dom](https://www.npmjs.com/package/react-dom) - Version ^18.2.0
- [react-icons](https://www.npmjs.com/package/react-icons) - Version ^5.0.1
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Version ^6.21.2
- [react-scripts](https://www.npmjs.com/package/react-scripts) - Version 5.0.1
- [react-slider](https://www.npmjs.com/package/react-slider) - Version ^2.0.6
- [web-vitals](https://www.npmjs.com/package/web-vitals) - Version ^2.1.4
- [npm-check](https://www.npmjs.com/package/npm-check) (Dev Dependency) - Version ^6.0.1

------

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Bug Reporting

If you encounter any issues or have suggestions, please [create an issue](https://github.com/YoussefMo7amed/producto/issues).
