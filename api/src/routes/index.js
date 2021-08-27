const { Router } = require('express');
const { getVehicles, getVehicleDetail, getCategories, updateValue } = require('./utils');

const router = Router();



router.get('/vehicles', getVehicles);

router.get('/vehicles/:id', getVehicleDetail);

router.put('/property-value', updateValue)

module.exports = router;