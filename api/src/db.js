require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const { DATABASE_URL } = process.env;

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/vehicles',
{
    logging: false  
})

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Category, Vehicle, Property, PropertyValue } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Category.hasMany(Property, { foreignKey: 'categoryProperty', sourceKey: 'id' });
Property.belongsTo(Category, { foreignKey: 'categoryProperty', sourceKey: 'id' });
PropertyValue.belongsTo(Vehicle, { foreignKey: 'valueVehicle', sourceKey: 'id' });
PropertyValue.belongsTo(Property, { foreignKey: 'valueProperty', sourceKey: 'id' });
Vehicle.belongsTo(PropertyValue, { foreignKey: 'valueVehicle', sourceKey: 'id' });
Property.belongsTo(PropertyValue, { foreignKey: 'valueProperty', sourceKey: 'id' });

module.exports = {
    sequelize
};
