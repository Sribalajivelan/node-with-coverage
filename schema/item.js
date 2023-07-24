const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig')

// Define a simple model for the database table
const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

// Create the table if it doesn't exist
(async () => {
    await Item.sync();
    console.log('Database table created.');
})();

module.exports = Item;