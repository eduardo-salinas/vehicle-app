const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const PropertyValue = sequelize.define('propertyvalue', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    value: {
        type: DataTypes.INTEGER
    }
}, { timestamps: false });


module.exports = PropertyValue;