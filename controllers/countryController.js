/// controllers/countryController.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbModel = require('../models/dbModel');

router.use(bodyParser.json());

//SET UP MY ENDPOINTS HERE:
//1. a simple endpoint to retrieve all countries from the database:
router.get('/', async (req, res) => {
    try {
        const [rows] = await dbModel.query('SELECT * FROM countries');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
