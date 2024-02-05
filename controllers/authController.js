// controllers/authController.js
const express = require('express');
const router = express.Router();
const authModel = require('../models/authModel');

  const createPasswordResetToken = async (req, res) => {
    const { email } = req.body;

    try {
      await authModel.createPasswordResetToken(email);
      res.json({ message: 'Password reset token created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error, createPasswordResetToken function failed' });
    }
  };


module.exports = { createPasswordResetToken };
