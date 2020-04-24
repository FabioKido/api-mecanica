const { Router } = require('express');

const vehicleController = require('../controllers/customerEnvironment/vehicleController');
const automobileController = require('../controllers/customerEnvironment/automobileController');
const bicycleController = require('../controllers/customerEnvironment/bicycleController');

const vehiclesRouter = Router();

vehiclesRouter.post('/:id_customer/add', vehicleController.addVehicle);
vehiclesRouter.get('/', vehicleController.getVehicles);
vehiclesRouter.get('/automobile/:id_automobile', automobileController.getAutomobile);
vehiclesRouter.get('/bicycle/:id_bicycle', bicycleController.getBicycle);
vehiclesRouter.get('/automobiles', automobileController.getAutomobiles);
vehiclesRouter.get('/bicycles', bicycleController.getBicycles);
vehiclesRouter.put('/:id_vehicle', vehicleController.updateVehicle);
vehiclesRouter.delete('/:id_vehicle', vehicleController.deleteVehicle);

module.exports = vehiclesRouter;
