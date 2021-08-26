const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('property', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
        }
    }, { timestamps: false });
    
};
