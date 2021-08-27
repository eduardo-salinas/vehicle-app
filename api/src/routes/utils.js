const PropertyValue = require('../models/PropertyValue');
const Vehicle = require('../models/Vehicle');
const Property = require('../models/Property');
const Category = require('../models/Category');

const propertValue = async (propertyId, vehicleId) => {
    const value = await PropertyValue.findAll({ where: { valuevehicle: vehicleId, valueproperty: propertyId } });
    return value;
};

const propert = async (categoryId, vehicleId) => {
    const properties = await Property.findAll({ where: { categoryproperty: categoryId } });
    const result = await Promise.all(properties.map(async p => {
        return {
            id: p.id,
            name: p.name,
            value: await propertValue(p.id, vehicleId)
        }
    }));
    return result
};

const getVehicles = async (req, res) => {
    const allVehicles = await Vehicle.findAll();
    return res.status(200).json(allVehicles);
};

const getVehicleDetail = async (req, res) => {
    const vehicleId = req.params.id;
    const vehicle = await Vehicle.findAll({ where: { id: vehicleId } });
    
    if (!vehicle.length) {
        res.status(404).json({ error: "El id no corresponde a un vehículo" })
    } else {

        const categories = await Category.findAll();

        const result = {
            vehicle: vehicle,
            categories: await Promise.all(categories.map(async c => {
                return {
                    id: c.id,
                    name: c.name,
                    icon: c.icon,
                    properties: await propert(c.id, vehicleId)
                }
            }))
        };

        return res.status(200).json(result);

    };
};

module.exports = {
    getVehicles,
    getVehicleDetail
}