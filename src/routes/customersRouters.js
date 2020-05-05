const { Router } = require('express');

const customerController = require('../controllers/customerEnvironment/customerController');

const customersRouter = Router();

customersRouter.post('/add', customerController.store);
customersRouter.get('/', customerController.index);
customersRouter.get('/:id_customer', customerController.show);
customersRouter.put('/:id_customer', customerController.update);
customersRouter.delete('/:id_customer', customerController.destroy);

module.exports = customersRouter;
