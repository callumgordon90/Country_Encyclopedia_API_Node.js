const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3306; // (Note: i changed this from the default 3000 to 3306)

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Now you can continue with the database connection and endpoint definitions below this point.
