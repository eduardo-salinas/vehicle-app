const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const Category = require('./Category.js');
const PropertyValue = require('./PropertyValue.js');

const Property = sequelize.define('properties', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    }
}, { timestamps: false });

Property.hasMany(PropertyValue, { foreignKey: 'valueproperty', sourceKey: 'id' })
PropertyValue.belongsTo(Property, { foreignKey: 'valueproperty', sourceKey: 'id' });

Category.hasMany(Property, { foreignKey: 'categoryproperty', sourceKey: 'id' })
Property.belongsTo(Category, { foreignKey: 'categoryproperty', sourceKey: 'id' });

module.exports = Property;
