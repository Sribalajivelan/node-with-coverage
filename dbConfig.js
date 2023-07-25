const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config');
// Connect to the PostgreSQL database
const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: 'postgres',
});

// Test the database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the PostgreSQL database.');
    } catch (error) {
        console.error('Unable to connect to the PostgreSQL database:', error);
    }
})();

module.exports = sequelize;