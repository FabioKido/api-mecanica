const { Router } = require('express');

const sessionController = require('../controllers/userEnvironment/sessionController');
const vehicleController = require('../controllers/customerEnvironment/vehicleController');
const automobileController = require('../controllers/customerEnvironment/automobileController');
const bicycleController = require('../controllers/customerEnvironment/bicycleController');

const vehiclesRouter = Router();

vehiclesRouter.post('/:id_customer/add', sessionController.allowIfLoggedin, vehicleController.store);
vehiclesRouter.get('/', sessionController.allowIfLoggedin, vehicleController.index);
vehiclesRouter.put('/:id_vehicle', sessionController.allowIfLoggedin, vehicleController.update);
vehiclesRouter.delete('/:id_vehicle', sessionController.allowIfLoggedin, vehicleController.destroy);

vehiclesRouter.get('/automobile/:id_automobile', sessionController.allowIfLoggedin, automobileController.show);
vehiclesRouter.get('/automobiles', sessionController.allowIfLoggedin, automobileController.index);

vehiclesRouter.get('/bicycle/:id_bicycle', sessionController.allowIfLoggedin, bicycleController.show);
vehiclesRouter.get('/bicycles', sessionController.allowIfLoggedin, bicycleController.index);

module.exports = vehiclesRouter;
