module.exports = (sequelize) => {

    sequelize.define('vehicle', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        icon: {
            type: DataTypes.STRING
        }
    },{ timestamps: false });
};