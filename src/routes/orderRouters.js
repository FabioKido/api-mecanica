const { Router } = require('express');

const orderController = require('../controllers/serviceEnvironment/orderController');
const orderServiceController = require('../controllers/serviceEnvironment/orderServiceController');
const orderProductController = require('../controllers/serviceEnvironment/orderProductController');
const paymentController = require('../controllers/serviceEnvironment/paymentController');
const parcelController = require('../controllers/serviceEnvironment/parcelController');

const orderServiceRouter = Router();

orderServiceRouter.post('/os', orderController.store);
orderServiceRouter.get('/os-all', orderController.index);
orderServiceRouter.get('/os/:id_order', orderController.show);
orderServiceRouter.put('/os/:id_order', orderController.update);
orderServiceRouter.delete('/os/:id_order', orderController.destroy);

orderServiceRouter.post('/order-service/:id_order', orderServiceController.store);
orderServiceRouter.get('/order-services', orderServiceController.index);
orderServiceRouter.put('/order-service/:id_os', orderServiceController.update);
orderServiceRouter.delete('/order-service/:id_os', orderServiceController.destroy);

orderServiceRouter.post('/order-product/:id_os', orderProductController.store);
orderServiceRouter.get('/order-products', orderProductController.index);
orderServiceRouter.put('/order-product/:id_op', orderProductController.update);
orderServiceRouter.delete('/order-product/:id_op', orderProductController.destroy);

orderServiceRouter.post('/payment/:id_order', paymentController.store);
orderServiceRouter.get('/payments', paymentController.index);
orderServiceRouter.get('/payment/:id_payment', paymentController.show);
orderServiceRouter.put('/payment/:id_payment', paymentController.update);
orderServiceRouter.delete('/payment/:id_payment', paymentController.destroy);

orderServiceRouter.post('/parcel/:id_payment', parcelController.store);
orderServiceRouter.get('/parcels', parcelController.index);
orderServiceRouter.put('/parcel/:id_parcel', parcelController.update);
orderServiceRouter.delete('/parcel/:id_parcel', parcelController.destroy);

module.exports = orderServiceRouter;
