const { Router } = require('express');
const customerController = require('../controllers/customerEnvironment/customerController');

const customersRouter = Router();

customersRouter.post('/add', customerController.addCustomer);
customersRouter.get('/', customerController.getCustomers);
customersRouter.get('/:id_customer', customerController.getCustomer);
customersRouter.put('/:id_customer', customerController.updateCustomer);
customersRouter.delete('/:id_customer', customerController.deleteCustomer);

module.exports = customersRouter;
