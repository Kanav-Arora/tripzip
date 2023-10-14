<div align="center">

# Travel Buddy
[API Documentation](https://documenter.getpostman.com/view/16660574/2s9YR57axm) | [Server](#server)
</div>

<!-- <iframe width="560" height="315" src='https://dbdiagram.io/embed/650882a802bd1c4a5ecc62da'> </iframe> -->

## Server

### Request Status Codes

| Status Code              | Type          | Description             |
|--------------------------|---------------|-------------------------|
| `204 No Content`         | Success       | No Data Sent            |
| `200 OK`                 | Success       | Contains Data           |
| `201 Created`            | Success       | Data Created            |
| `401 Unauthorized`      | Error         | Unauthorized            |
| `404 Not Found`          | Error         | Data Not Found          |
| `500 Internal Server Error` | Error      | Internal Server Error   |

### API Endpoints

- /users
  - [/signup](#post-userssignup)
  - [/signin](#post-userssignin)
  - [/signout](#post-userssignout)
- /account
  - [get](#get-account)
  - [post](#post-account)

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

#### `GET /account`

- **Description**: This endpoint retrieves user account details based on the provided UID.

- **Request Headers**:
  - `x-uid` (string): The unique identifier of the user.

- **Response Format**:
  - JSON Object:
    - `uid` (string): The unique identifier of the user.
    - `address` (string): The user's address.
    - `pincode` (number): The user's pincode.
    - `city` (string): The user's city.
    - `state` (string): The user's state.
    - `country` (string): The user's country.
    - `age` (number): The user's age.
    - `gender` (string): The user's gender.
    - `tripsCreated` (array): An array of trip IDs created by the user.
    - `tripsInterested` (array): An array of trip IDs the user is interested in.
    - `status` (string): The status of the user.
    - `updatedAt` (string): The date when the user details were last updated.

- **Errors**:
  - 404 Not Found: If user details are not found for the provided UID.
  - 500 Internal Server Error: If there's a server-side error during the request.


#### `POST /account`

- **Description**: This endpoint either creates a new user's account details or updates existing details based on the provided UID.

- **Request Headers**:
  - `x-uid` (string): The unique identifier of the user.

- **Request Body**:
  - `address` (string): The user's address.
  - `pincode` (number): The user's pincode.
  - `city` (string): The user's city.
  - `state` (string): The user's state.
  - `country` (string): The user's country.
  - `age` (number): The user's age.
  - `gender` (string): The user's gender.
  - `tripsCreated` (array): An array of trip IDs created by the user.
  - `tripsInterested` (array): An array of trip IDs the user is interested in.
  - `status` (string): The status of the user.

- **Response Format**:
  - JSON Object:
    - `message` (string): A message indicating whether the user details were created or overwritten.

- **Errors**:
  - 500 Internal Server Error: If there's a server-side error during the request.

<!-- ### Using Postman

We provide Postman collections to help you interact with our API. To get started:

1. [Download Postman](https://www.getpostman.com/downloads/) if you haven't already.
2. Import the relevant collection JSON file from the `documentation/postman` folder.
3. Configure the necessary environment variables (if applicable).
4. Start making requests!

- [Collection 1](documentation/postman/Collection1.json)
- [Collection 2](documentation/postman/Collection2.json)

Please refer to the individual collection documentation for detailed usage instructions. -->

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

## License

This project is licensed under the [GNU AFFERO GENERAL PUBLIC LICENSE Version 3](LICENSE).

## Contributing

Please read [Contribution Guide](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
