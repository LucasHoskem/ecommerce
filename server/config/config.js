const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./config/usuario.db');

module.exports = sequelize;
