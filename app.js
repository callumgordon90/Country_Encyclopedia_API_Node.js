const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// ABANDONED STRUCTURE: Use the countryController for /countries routes
//app.use('/countries', countryController);


// Use countryRoutes for /countries routes INSTEAD:
//get all countries:
app.use('/', countryRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




