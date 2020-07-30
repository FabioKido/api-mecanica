const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const orderController = require('../controllers/serviceEnvironment/orderController');
const orderServiceController = require('../controllers/serviceEnvironment/orderServiceController');
const orderProductController = require('../controllers/serviceEnvironment/orderProductController');
const paymentController = require('../controllers/serviceEnvironment/paymentController');
const parcelController = require('../controllers/serviceEnvironment/parcelController');

const orderServiceRouter = Router();

orderServiceRouter.post('/os', authMiddleware, orderController.store);
orderServiceRouter.get('/os-all', authMiddleware, orderController.index);
orderServiceRouter.get('/os/:id_order', authMiddleware, orderController.show);
orderServiceRouter.put('/os/:id_order', authMiddleware, orderController.update);
orderServiceRouter.delete('/os/:id_order', authMiddleware, orderController.destroy);

orderServiceRouter.post('/order-service/:id_order', authMiddleware, orderServiceController.store);
orderServiceRouter.get('/order-services', authMiddleware, orderServiceController.index);
orderServiceRouter.get('/order-service/:id_os', authMiddleware, orderServiceController.show);
orderServiceRouter.put('/order-service/:id_os', authMiddleware, orderServiceController.update);
orderServiceRouter.delete('/order-service/:id_os', authMiddleware, orderServiceController.destroy);

orderServiceRouter.post('/order-product/:id_os', authMiddleware, orderProductController.store);
orderServiceRouter.get('/order-products', authMiddleware, orderProductController.index);
orderServiceRouter.put('/order-product/:id_op', authMiddleware, orderProductController.update);
orderServiceRouter.delete('/order-product/:id_op', authMiddleware, orderProductController.destroy);

orderServiceRouter.post('/payment/:id_order', authMiddleware, paymentController.store);
orderServiceRouter.get('/payments', authMiddleware, paymentController.index);
orderServiceRouter.get('/payment/:id_payment', authMiddleware, paymentController.show);
orderServiceRouter.put('/payment/:id_payment', authMiddleware, paymentController.update);
orderServiceRouter.delete('/payment/:id_payment', authMiddleware, paymentController.destroy);

orderServiceRouter.post('/parcel/:id_payment', authMiddleware, parcelController.store);
orderServiceRouter.get('/parcels', authMiddleware, parcelController.index);
orderServiceRouter.put('/parcel/:id_parcel', authMiddleware, parcelController.update);
orderServiceRouter.delete('/parcel/:id_parcel', authMiddleware, parcelController.destroy);

module.exports = orderServiceRouter;
