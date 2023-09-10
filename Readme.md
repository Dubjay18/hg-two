# Person CRUD API

This is a simple RESTful API for performing CRUD (Create,
Read, Update, Delete) operations on a "person" resource. It
uses Express.js and MongoDB via Mongoose for database
interaction.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following
requirements:

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone this repository:

```bash
   git clone https://github.com/Dubjay18/hg-two.git
```

2. install dependencies:

```bash
   cd hg-two
   npm install
```

3. Configure your MongoDB connection string in
   src/config/constants.js.

4. Start server

```bash
   npm start
```

The server should now be running at http://localhost:8000.

## Usage

### API Endpoints

- **Create a Person**: `POST /api/persons`

  - Add a new person to the database.
  - **Request Body Example**:

    ```json
    {
      "name": "John Doe"
    }
    ```

- **Read a Person by Name**: `GET /api/persons/:name`

  - Fetch details of a person by their name.

- **Update a Person by Name**: `PUT /api/persons/:name`

  - Modify details of an existing person by their name.
  - **Request Body Example**:

    ```json
    {
      "name": "Updated Name"
    }
    ```

- **Delete a Person by Name**: `DELETE /api/persons/:name`
  - Remove a person by their name.

### Testing

To run tests, use the following command:

```bash
npm test
```

# Documentation

Detailed API documentation can be found in the
DOCUMENTATION.md file.

# Contributing

Contributions are welcome! Feel free to open issues and pull
requests.

# License

This project is licensed under the MIT License.
