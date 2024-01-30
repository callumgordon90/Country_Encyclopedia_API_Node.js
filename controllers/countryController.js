/// controllers/countryController.j
const dbModel = require('../models/dbModel');



//SET UP MY ENDPOINTS HERE:
const getAllCountries = async (req, res) => {
    try {
        const [rows] = await dbModel.query('SELECT * FROM countries');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, getAllCountries controller function failed' });
    }
};


module.exports = {
    getAllCountries,
};