const express = require('express');
const router = express.Router();
const cors = require('cors');
const countryModel = require('../models/countryModel');

    //SET UP MY ENDPOINTS HERE:

    //Get all countries
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

    // GET single country by ID
    const getCountryById = async (req, res) => {
        const countryId = req.params.id;
        try {
            const country = await countryModel.getCountryById(countryId);
            if (!country) {
                res.status(404).json({ error: 'Country not found' });
                return;
            }
            res.json(country);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error, getCountryById controller function failed' });
        }
    };

    // POST add new country
    const addCountry = async (req, res) => {
        const newCountryData = req.body;
        try {
            const result = await countryModel.addCountry(newCountryData);
            res.json({ message: 'Country added successfully', countryId: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error, addCountry controller function failed' });
        }
    };





module.exports = { getAllCountries, getCountryById, addCountry };


