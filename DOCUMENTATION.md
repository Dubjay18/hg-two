# API Documentation

This document provides details about the endpoints and usage
of the CRUD API for managing persons.

## Base URL

The base URL for all API endpoints is:
`https://hg-two.onrender.com/api`

## Endpoints

### Create a Person

**Endpoint:** `POST /persons`

**Description:** Add a new person to the database.

**Request:**

```json
{
  "name": "John Doe"
}
```

**Response (201) created:**

```json
{
  "name": "John Doe",

```

**Response (400 Bad Request):**

```json
{
  "error": "Name must be a string"
}
```

# Read a Person by Name

**Endpoint:** GET /persons/:name

**Description:** Fetch details of a person by their name.

**Response (200 OK):**

```json
{
  "name": "John Doe"
}
```

**Response (404 Not Found):**

```json
{
  "error": "Person not found"
}
```

# Update a Person by Name

**Endpoint:** PUT /persons/:name

**Description:** Modify details of an existing person by
their name.

**Request:**

```json
{
  "name": "Updated Name"
}
```

**Response (200 OK):**

```json
{
  "name": "Updated Name"
}
```

**Response (404 Not Found):**

```json
{
  "error": "Person not found"
}
```

**Response (400 Bad request):**

```json
{
  "error": "Name must be a string"
}
```

# Delete a Person by Name

**Endpoint:** DELETE /persons/:name

**Description:** Remove a person by their name.

**Response (204 No Content):**

**Response (404 Not Found):**

```json
{
  "error": "Person not found"
}
```

# Error Handling

If an endpoint encounters an error, it will respond with an
appropriate status code and an error message in the response
body.

# Data Validation

The API enforces basic data validation to ensure that the
"name" field is a string.

# Usage Example

Here's an example of how to use the API in a JavaScript
application:

```javascript
// Fetch a person by name
fetch("https://hg-two.onrender.com/api/persons/John%20Doe")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

# Notes

This API uses MongoDB as the backend database.

# UMI Diagram

![Sample Image](UMI-.png)
