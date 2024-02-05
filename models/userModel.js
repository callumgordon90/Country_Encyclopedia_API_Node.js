// models/userModel.js
const dbConnection = require('../dbConnection');
const bcrypt = require('bcryptjs');

class UserModel {
  static table = 'users';

  static async createUser(userData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const [result] = await dbConnection.query(`INSERT INTO ${this.table} SET ?`, {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      });
      return result.insertId;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error, createUser function failed');
    }
  }

  static async getUserByEmail(email) {
    try {
      const [rows] = await dbConnection.query(`SELECT * FROM ${this.table} WHERE email = ?`, [email]);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error, getUserByEmail function failed');
    }
  }
}

module.exports = UserModel;
