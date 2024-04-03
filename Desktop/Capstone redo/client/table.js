const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize instance

const Table = sequelize.define('table', {
  // Define the table's columns and their data types
  property1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  property2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Table;
