const express = require('express');
const router = express.Router();
const cors = require('cors');
const countryModel = require('../models/countryModel');

//SET UP MY ENDPOINTS HERE:
const getAllCountries = async (req, res) => {
    try {
        console.log('trying controller');
        const countries = await countryModel.getAllCountries();
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, getAllCountries controller function failed' });
    }
};

module.exports = { getAllCountries };
