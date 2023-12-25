<div align="center">

# Travel Buddy



[API Documentation](https://documenter.getpostman.com/view/16660574/2s9YR57axm) | [Server](#server)
</div>

<!-- <iframe width="560" height="315" src='https://dbdiagram.io/embed/650882a802bd1c4a5ecc62da'> </iframe> -->

![Trip Page]("./documentation/tripPage.png")

## Server

### Request Status Codes

| Status Code              | Type          | Description             |
|--------------------------|---------------|-------------------------|
| `200 OK`                 | Success       | Contains Data           |
| `201 Created`            | Success       | Data Created            |
| `204 No Content`         | Success       | No Data Sent            |
| `400 Invalid Inputs`      | Error         | Invalid Inputs         |
| `401 Unauthorized`      | Error         | Unauthorized             |
| `404 Not Found`          | Error         | Data Not Found          |
| `500 Internal Server Error` | Error      | Internal Server Error   |

### API Endpoints

- /users
  - [/signup POST](https://documenter.getpostman.com/view/16660574/2s9YR57axm#eba1cfe7-5c40-4466-8a67-ec986700b33c)
  - [/signin POST](https://documenter.getpostman.com/view/16660574/2s9YR57axm#c5af9bfe-821a-4a6f-b9f9-1a299c124d09)
  - [/signout POST](https://documenter.getpostman.com/view/16660574/2s9YR57axm#82b594b0-25e9-4903-a75a-fd1262356d6b)
- /account
  - [GET](https://documenter.getpostman.com/view/16660574/2s9YR57axm#9abce0c6-2c09-4f83-aa9a-f0a354c4efb3)
  - [POST](https://documenter.getpostman.com/view/16660574/2s9YR57axm#9cf196c6-2252-4718-912e-4e5a38d93ba9)

### Using Postman

We provide Postman collections to help you interact with our API. To get started:

1. [Download Postman](https://www.getpostman.com/downloads/) if you haven't already.
2. Visit the [Documentation](https://documenter.getpostman.com/view/16660574/2s9YR57axm) to run APIs locally or import json file from [Collection.json](/documentation/postman/postman-collection.json).
3. Configure the necessary environment variables (if applicable).
4. Start making requests!

<!-- 2. Import the relevant collection JSON file from the `documentation/postman` folder. -->
<!-- - [Collection 1](documentation/postman/Collection1.json)
- [Collection 2](documentation/postman/Collection2.json) -->

Please refer to the documentation for detailed usage instructions.

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
