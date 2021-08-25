const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('property', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        value: {
            type: DataTypes.INTEGER
        }
    },{ timestamps: false });
};
