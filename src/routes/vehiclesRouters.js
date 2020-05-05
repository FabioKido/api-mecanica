const { Router } = require('express');

const vehicleController = require('../controllers/customerEnvironment/vehicleController');
const automobileController = require('../controllers/customerEnvironment/automobileController');
const bicycleController = require('../controllers/customerEnvironment/bicycleController');

const vehiclesRouter = Router();

vehiclesRouter.post('/:id_customer/add', vehicleController.store);
vehiclesRouter.get('/', vehicleController.index);
vehiclesRouter.put('/:id_vehicle', vehicleController.update);
vehiclesRouter.delete('/:id_vehicle', vehicleController.destroy);

vehiclesRouter.get('/automobile/:id_automobile', automobileController.show);
vehiclesRouter.get('/automobiles', automobileController.index);

vehiclesRouter.get('/bicycle/:id_bicycle', bicycleController.show);
vehiclesRouter.get('/bicycles', bicycleController.index);

module.exports = vehiclesRouter;
