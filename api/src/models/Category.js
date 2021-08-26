const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('category', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        icon: {
            type: DataTypes.STRING
        }
    }, { timestamps: false });
};