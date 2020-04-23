const { Router } = require('express');

const vehicleController = require('../controllers/customerEnvironment/vehicleController');

const vehiclesRouter = Router();

vehiclesRouter.post('/:id_customer/add', vehicleController.addVehicle);
vehiclesRouter.get('/', vehicleController.getVehicles);
// vehiclesRouter.get('/vehicle/:id_vehicle', vehicleController.getVehicle);
// vehiclesRouter.put('/vehicle/:id_vehicle', vehicleController.updateVehicle);
// vehiclesRouter.delete('/vehicle/:id_vehicle', vehicleController.deleteVehicle);

module.exports = vehiclesRouter;
