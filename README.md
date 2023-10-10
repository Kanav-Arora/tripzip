# Travel Buddy Documentation

<!-- <iframe width="560" height="315" src='https://dbdiagram.io/embed/650882a802bd1c4a5ecc62da'> </iframe> -->

## Server

### API Endpoints

- /users
  - [/signup](#post-userssignup)
  - [/signin](#post-userssignin)
  - [/signout](#post-userssignout)

#### `POST /users/signup`

- **Description**: This endpoint handles user registration.
- **Request Body**:
  - `name` (string): The user's name.
  - `email` (string): The user's email address.
  - `password` (string): The user's password.
- **Response Format**:
  - JSON Object:
    - `uid` (string): The unique identifier of the user.
    - `name` (string): The user's name.
- **Errors**:
  - 400 Bad Request: If any required fields are missing or invalid.
  - 500 Internal Server Error: If there's a server-side error during registration.

#### `POST /users/signin`

- **Description**: This endpoint handles user login.
- **Request Body**:
  - `email` (string): The user's email address.
  - `password` (string): The user's password.
- **Response Format**:
  - JSON Object:
    - `uid` (string): The unique identifier of the user.
    - `name` (string): The user's name.
- **Errors**:
  - 400 Bad Request: If any required fields are missing or invalid.
  - 401 Unauthorized: If the provided credentials are incorrect.
  - 500 Internal Server Error: If there's a server-side error during login.

#### `POST /users/signout`

- **Description**: This endpoint handles user logout.
- **Response Format**:
  - Text: "Logout successful".
- **Errors**:
  - 500 Internal Server Error: If there's a server-side error during logout.

### Middleware

#### `validateUser`

- **Description**: This middleware validates user authorization by verifying JSON Web Tokens (JWTs).
- **Input**:
  - `req`: The request object.
  - `res`: The response object.
  - `next`: The next middleware function.
- **Output**:
  - Modifies `req` object to include user information if valid token is present.
- **Errors**:
  - 403 Forbidden: If the token is invalid or missing.
  - 401 Unauthorized: If there's an unauthorized request.
  - 500 Internal Server Error: If there's a server-side error during validation.

### Models

#### `User Model`

- **Fields**:
  - `email` (string): User's email address (required, unique).
  - `password` (string): User's hashed password (required, min length: 8).
  - `name` (string): User's name (required).
  - `status` (string): User status (active, inactive, deleted; default: active).
  - `created_at` (date): Date of user creation (default: current date).
  - `updated_at` (date): Date of last user update (default: current date).
  - `last_signin_at` (date): Date of last signin (default: current date).

#### `UserDetails Model`

- **Fields**:
  - `uid` (ObjectId): User's unique identifier (required, unique).
  - `address` (string): User's address.
  - `pincode` (number): User's pin code.
  - `city` (string): User's city.
  - `state` (string): User's state.
  - `country` (string): User's country.
  - `age` (number): User's age (max: 100).
  - `gender` (string): User's gender (male, female, other).
  - `tripsCreated` (Array): Array of trip IDs created by the user.
  - `tripsInterested` (Array): Array of trip IDs the user is interested in.
  - `status` (string): User status (active, inactive, deleted; default: active).
  - `updatedAt` (date): Date of last update (default: current date).

### Logging

- **Description**: The application uses Winston for logging activities. It creates log files for both general server activities (`server.log`) and errors (`error.log`). The logs include timestamps for each entry.

### Password Manager

- **Description**: The application uses a password manager utility for securely managing user passwords. It employs the `scrypt` encryption algorithm.

### Dependencies

- **express** (v4.17.1): A fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building web and mobile applications.

- **cors** (v2.8.5): Middleware for Express.js to enable Cross-Origin Resource Sharing, allowing secure communication between different domains.

- **body-parser** (v1.19.0): Parses the incoming request bodies in a middleware before handlers, making it available under `req.body`.

- **cookie-parser** (v1.4.5): Middleware for Express.js that parses cookies attached to the client request object.

- **winston** (v3.3.3): A versatile logging library for Node.js. It provides flexible logging and is commonly used in production environments.

- **mongoose** (v6.0.15): A MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model application data.

- **dotenv** (v10.0.0): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

### Dev Dependencies

- **eslint** (v7.32.0): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

- **nodemon** (v2.0.15): A utility that monitors for changes in files and automatically restarts the server.
