const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    },
    icon: {
        type: DataTypes.TEXT
    }
}, { timestamps: false });

module.exports = Category;