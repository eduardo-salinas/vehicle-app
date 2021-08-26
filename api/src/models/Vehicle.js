const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('vehicles', {
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
};