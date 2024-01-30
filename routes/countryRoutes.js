// routes/countryRoutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const countryController = require('../controllers/countryController');

// Defining routes for the 'countries' resource (get all countries)
router.get('/', countryController.getAllCountries);

module.exports = router;
