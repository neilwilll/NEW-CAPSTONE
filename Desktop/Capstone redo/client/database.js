const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // Replace with your database dialect if using a different one
});

module.exports = sequelize;
