const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const countryController = require('./controllers/countryController');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Use the countryController for /countries routes
app.use('/countries', countryController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




