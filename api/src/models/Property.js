const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('property', {
        name: {
            type: DataTypes.text,
            allowNull: false,
            unique: true
        },
        value: {
            type: DataTypes.INTEGER
        }
    },{ timestamps: false });
};
