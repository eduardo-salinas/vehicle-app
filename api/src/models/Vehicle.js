const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const PropertyValue = require('./PropertyValue.js');

const Vehicle = sequelize.define('vehicles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    },
    patent: {
        type: DataTypes.TEXT,
    }
}, { timestamps: false });

Vehicle.hasMany(PropertyValue, { foreignKey: "valuevehicle", sourceKey: 'id' });
PropertyValue.belongsTo(Vehicle, { foreignKey: "valuevehicle", sourcekey: 'id' });

module.exports = Vehicle;