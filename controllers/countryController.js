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


    // PUT or PATCH update country
    const updateCountry = async (req, res) => {
        const countryId = req.params.id;
        const updatedCountryData = req.body;
        
        try {
        const result = await countryModel.updateCountry(countryId, updatedCountryData);
        res.json({ message: 'Country updated successfully' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, updateCountry controller function failed' });
        }
    };

    // DELETE delete country
    const deleteCountry = async (req, res) => {
        const countryId = req.params.id;
        
        try {
        const result = await countryModel.deleteCountry(countryId);
        res.json({ message: 'Country deleted successfully' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, deleteCountry controller function failed' });
        }
    };


    // Search countries based on criteria
    const searchCountries = async (req, res) => {
        const searchCriteria = req.query; // Query parameters from the request URL
        try {
            const countries = await countryModel.searchCountries(searchCriteria);
            res.json(countries);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error, searchCountries controller function failed' });
        }
    };


module.exports = { getAllCountries, getCountryById, addCountry, updateCountry, deleteCountry, searchCountries };


