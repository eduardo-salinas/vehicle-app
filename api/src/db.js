require('dotenv').config();
const { Sequelize } = require('sequelize');

const {DATABASE_URL} = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
    logging: false, 
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });

module.exports = sequelize;
