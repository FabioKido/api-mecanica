const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const vehicleController = require('../controllers/customerEnvironment/vehicleController');
const automobileController = require('../controllers/customerEnvironment/automobileController');
const bicycleController = require('../controllers/customerEnvironment/bicycleController');

const vehiclesRouter = Router();

vehiclesRouter.post('/:id_customer/add', authMiddleware, vehicleController.store);
vehiclesRouter.get('/', authMiddleware, vehicleController.index);
vehiclesRouter.get('/:id_vehicle/one', authMiddleware, vehicleController.show);
vehiclesRouter.put('/:id_vehicle', authMiddleware, vehicleController.update);
vehiclesRouter.delete('/:id_vehicle', authMiddleware, vehicleController.destroy);

vehiclesRouter.get('/automobile/:id_vehicle', authMiddleware, automobileController.show);
vehiclesRouter.get('/automobiles', authMiddleware, automobileController.index);

vehiclesRouter.get('/bicycle/:id_vehicle', authMiddleware, bicycleController.show);
vehiclesRouter.get('/bicycles', authMiddleware, bicycleController.index);

module.exports = vehiclesRouter;
