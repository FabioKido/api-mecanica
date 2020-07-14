const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const customerController = require('../controllers/customerEnvironment/customerController');
const customerInfoController = require('../controllers/customerEnvironment/customerInfoController');

const customersRouter = Router();

customersRouter.post('/add', authMiddleware, customerController.store);
customersRouter.get('/', authMiddleware, customerController.index);
customersRouter.get('/:id_customer', authMiddleware, customerController.show);
customersRouter.put('/:id_customer', authMiddleware, customerController.update);
customersRouter.delete('/:id_customer', authMiddleware, customerController.destroy);

customersRouter.get('/inf/:id', authMiddleware, customerInfoController.show);
customersRouter.get('/vehicles/:id_customer', authMiddleware, customerInfoController.index);

module.exports = customersRouter;
