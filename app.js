const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// ABANDONED STRUCTURE: Use the countryController for /countries routes
//app.use('/countries', countryController);

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use countryRoutes for /countries routes INSTEAD:
//get all countries:
app.use('/', countryRoutes);


// New user and auth routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




