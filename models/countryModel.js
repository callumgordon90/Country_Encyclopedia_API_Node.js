const dbConnection = require('../dbConnection');

class CountryModel {
  // Define the structure of the "countries" table
  static table = 'countries';
  static columns = [
    'id',
    'name',
    'capital',
    'national_sport',
    'national_food',
    'population',
    'nuclear_power',
    'continent',
    'government_type',
    'created_at',
    'updated_at',
  ];

  // Method to get all countries from the database
  static async getAllCountries() {
    try {
      console.log('Executing getAllCountries function');
      const [rows] = await dbConnection.query(`SELECT * FROM ${this.table}`);
      //console.log('Rows retrieved:', rows);
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error, getAllCountries function failed');
    }
  }
  

  // Add more methods for other database operations as needed
}

module.exports = CountryModel;
