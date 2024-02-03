// routes/countryRoutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const countryController = require('../controllers/countryController');

// Defining route for the 'countries' resource (get all countries):
router.get('/countries', countryController.getAllCountries);

// Define route for getting a single country by ID:
router.get('/countries/:id', countryController.getCountryById);

//Route for adding a new country:
router.post('/countries', countryController.addCountry);

// PUT or PATCH update country
router.put('/countries/:id', countryController.updateCountry);

// DELETE delete country
router.delete('/countries/:id', countryController.deleteCountry);

// Search countries based on criteria
router.get('/search', countryController.searchCountries);
/* IMPORTANT NOTE ABOUT THE ENDPOINT ABOVE^ (Search countries based on criteria)

*/

module.exports = router;

