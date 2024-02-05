// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Route to handle password reset token creation
router.post('/create-password-reset-token', authController.createPasswordResetToken);


module.exports = router;
