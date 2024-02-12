# Node.js Project

Welcome to the Node.js Project! This project is a RESTful API built using Node.js, which interacts with a MySQL database. It provides endpoints for managing countries, user authentication, and password reset functionalities.

## Project Structure

The project follows a standard directory structure:

```
/node_project
├── models/
│ ├── countryModel.js
│ ├── userModel.js
│ └── authModel.js (for authentication-related functionality)
├── controllers/
│ ├── countryController.js
│ ├── userController.js
│ └── authController.js (for authentication-related endpoints)
├── routes/
│ ├── countryRoutes.js
│ ├── userRoutes.js
│ └── authRoutes.js
├── utils/
│ └── generateRandomToken.js
└── app.js (entry point)

```

## Endpoints

### Countries

- **GET /countries**: Retrieve all countries.
- **GET /countries/:id**: Retrieve a single country by ID.
- **POST /countries**: Create a new country.
- **PUT /countries/:id**: Update a country by ID.
- **DELETE /countries/:id**: Delete a country by ID.
- **GET /countries/search**: Search countries based on specific criteria (e.g., continent, population range).

### Users

- **POST /users/register**: Register a new user.
- **POST /users/login**: Login user.

### Authentication

- **POST /auth/create-password-reset-token**: Generate a password reset token.

## Using the 'Search' Filter

### Overview

Retrieve countries based on specific criteria such as government type, national sport, and more. Customize your search by adding query parameters to the URL.

### Endpoint

`GET /countries/search`

### Query Parameters

- **governmentType**: Filter by government type (e.g., Democracy, Communism).
- **nationalSport**: Filter by national sport (e.g., Football, Rugby).
- **nationalFood**: Filter by national food.
- **population**: Filter by population.
- **nuclearPower**: Filter by nuclear power status (0 for false, 1 for true).
- **continent**: Filter by continent.
- **name**: Filter by country name.
- **capital**: Filter by capital city.

### Example Usage

#### Request

```http
GET http://localhost:3000/countries/search?governmentType=Communism&nationalSport=Football

example response:

[
  {
    "id": 1,
    "name": "Example Country",
    "capital": "Example Capital",
    "national_sport": "Football",
    // ... other country details
  },
  // ... additional matching countries
]

