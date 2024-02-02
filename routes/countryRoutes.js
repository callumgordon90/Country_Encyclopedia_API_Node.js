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


module.exports = router;

