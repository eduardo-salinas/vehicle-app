const { Router } = require('express');
const { getVehicles, getVehicleDetail } = require('./utils');

const router = Router();



router.get('/vehicles', getVehicles);

router.get('/vehicles/:id', getVehicleDetail);

module.exports = router;