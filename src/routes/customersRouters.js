const { Router } = require('express');

const customerController = require('../controllers/customerEnvironment/customerController');
const sessionController = require('../controllers/userEnvironment/sessionController');

const customersRouter = Router();

customersRouter.post('/add', sessionController.allowIfLoggedin, customerController.store);
customersRouter.get('/', sessionController.allowIfLoggedin, customerController.index);
customersRouter.get('/:id_customer', sessionController.allowIfLoggedin, customerController.show);
customersRouter.put('/:id_customer', sessionController.allowIfLoggedin, customerController.update);
customersRouter.delete('/:id_customer', sessionController.allowIfLoggedin, customerController.destroy);

module.exports = customersRouter;
