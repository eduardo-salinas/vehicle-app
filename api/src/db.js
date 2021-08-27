require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/vehicles',
    {
        logging: false
    }
);

module.exports = sequelize;
