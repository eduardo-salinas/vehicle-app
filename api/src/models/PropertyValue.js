const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('propertyValue', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        value: {
            type: DataTypes.INTEGER
        }
    }, { timestamps: false });
};