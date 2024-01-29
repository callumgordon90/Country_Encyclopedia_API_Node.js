const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const db = require('./db');

const app = express();
const port = 3000; //(Note: i changed this from 3306 to 3000 so as not to clash with mysql)

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

//SET UP MY ENDPOINTS HERE:

//1. a simple endpoint to retrieve all countries from the database:
    app.get('/countries', async (req, res) => {
        try {
            const [rows] = await db.query('SELECT * FROM countries');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });











app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

