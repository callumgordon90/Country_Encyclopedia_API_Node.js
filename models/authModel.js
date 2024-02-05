// models/authModel.js
const dbConnection = require('../dbConnection');
const generateRandomToken = require('../utils/generateRandomToken');

class AuthModel {


  static async createPasswordResetToken(email) {
    try {
      const token = generateRandomToken();

      const result = await dbConnection.query(
        'INSERT INTO password_reset_tokens SET email = ?, token = ?, created_at = NOW() ON DUPLICATE KEY UPDATE token = VALUES(token);',
        [email, token]
      );

      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error, createPasswordResetToken function failed');
    } 
  }

}

module.exports = AuthModel;
