const { Sequelize, DataTypes } = require('sequelize');
// Connect to the PostgreSQL database
const sequelize = new Sequelize('node_coverage_db', 'postgres', 'root', {
    host: 'localhost',
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