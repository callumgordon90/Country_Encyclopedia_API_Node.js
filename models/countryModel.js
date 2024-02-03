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


    // Method to get a country by ID
    static async getCountryById(countryId) {
        try {
            const [rows] = await dbConnection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [countryId]);
            return rows[0];
        } catch (error) {
            console.error(error);
            throw new Error('Internal Server Error, getCountryById function failed');
        }
    }


    // Method to add a new country
    static async addCountry(newCountryData) {
        try {
            console.log('entered into add country function');
            const result = await dbConnection.query(`INSERT INTO ${this.table} SET ?`, [newCountryData]);
            return result;
        } catch (error) {
            console.error(error);
            console.log([newCountryData]);
            throw new Error('Internal Server Error, addCountry function failed');
        }
    }


    // Method to update a country by ID
    static async updateCountry(countryId, updatedCountryData) {
        try {
        const result = await dbConnection.query(`UPDATE ${this.table} SET ? WHERE id = ?`, [updatedCountryData, countryId]);
        return result;
        } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error, updateCountry function failed');
        }
    }

    // Method to delete a country by ID
    static async deleteCountry(countryId) {
        try {
        const result = await dbConnection.query(`DELETE FROM ${this.table} WHERE id = ?`, [countryId]);
        return result;
        } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error, deleteCountry function failed');
        }
    }

    // Method to search countries based on criteria
    static async searchCountries(criteria) {
        try {
            // Construct my SQL query dynamically based on the provided criteria
            const queryConditions = [];
            const queryParams = [];

            if (criteria.name) {
                queryConditions.push('name = ?');
                queryParams.push(criteria.name);
            }

            if (criteria.capital) {
                queryConditions.push('capital = ?');
                queryParams.push(criteria.capital);
            }

            if (criteria.nationalSport) {
                queryConditions.push('national_sport = ?');
                queryParams.push(criteria.nationalSport);
            }

            if (criteria.nationalFood) {
                queryConditions.push('national_food = ?');
                queryParams.push(criteria.nationalFood);
            }

            if (criteria.maxPopulation) {
                queryConditions.push('population <= ?');
                queryParams.push(criteria.maxPopulation);
            }

            if (criteria.nuclearPower !== undefined) {
                queryConditions.push('nuclear_power = ?');
                queryParams.push(criteria.nuclearPower);
            }

            if (criteria.continent) {
                queryConditions.push('continent = ?');
                queryParams.push(criteria.continent);
            }

            if (criteria.governmentType) {
                queryConditions.push('government_type = ?');
                queryParams.push(criteria.governmentType);
            }

            // Add conditions for other criteria (countryName, capitalCity, food, sport) similarly

            const queryString = `SELECT * FROM countries WHERE ${queryConditions.join(' AND ')}`;
            const result = await dbConnection.query(queryString, queryParams);

            return result[0];
        } catch (error) {
            console.error(error);
            throw new Error('Internal Server Error, searchCountries function failed');
        }
    }


  // Add more methods for other database operations as needed
}

module.exports = CountryModel;
