const { Router } = require('express');

const sessionController = require('../controllers/userEnvironment/sessionController');
const orderController = require('../controllers/serviceEnvironment/orderController');
const orderServiceController = require('../controllers/serviceEnvironment/orderServiceController');
const orderProductController = require('../controllers/serviceEnvironment/orderProductController');
const paymentController = require('../controllers/serviceEnvironment/paymentController');
const parcelController = require('../controllers/serviceEnvironment/parcelController');

const orderServiceRouter = Router();

orderServiceRouter.post('/os', sessionController.allowIfLoggedin, orderController.store);
orderServiceRouter.get('/os-all', sessionController.allowIfLoggedin, orderController.index);
orderServiceRouter.get('/os/:id_order', sessionController.allowIfLoggedin, orderController.show);
orderServiceRouter.put('/os/:id_order', sessionController.allowIfLoggedin, orderController.update);
orderServiceRouter.delete('/os/:id_order', sessionController.allowIfLoggedin, orderController.destroy);

orderServiceRouter.post('/order-service/:id_order', sessionController.allowIfLoggedin, orderServiceController.store);
orderServiceRouter.get('/order-services', sessionController.allowIfLoggedin, orderServiceController.index);
orderServiceRouter.put('/order-service/:id_os', sessionController.allowIfLoggedin, orderServiceController.update);
orderServiceRouter.delete('/order-service/:id_os', sessionController.allowIfLoggedin, orderServiceController.destroy);

orderServiceRouter.post('/order-product/:id_os', sessionController.allowIfLoggedin, orderProductController.store);
orderServiceRouter.get('/order-products', sessionController.allowIfLoggedin, orderProductController.index);
orderServiceRouter.put('/order-product/:id_op', sessionController.allowIfLoggedin, orderProductController.update);
orderServiceRouter.delete('/order-product/:id_op', sessionController.allowIfLoggedin, orderProductController.destroy);

orderServiceRouter.post('/payment/:id_order', sessionController.allowIfLoggedin, paymentController.store);
orderServiceRouter.get('/payments', sessionController.allowIfLoggedin, paymentController.index);
orderServiceRouter.get('/payment/:id_payment', sessionController.allowIfLoggedin, paymentController.show);
orderServiceRouter.put('/payment/:id_payment', sessionController.allowIfLoggedin, paymentController.update);
orderServiceRouter.delete('/payment/:id_payment', sessionController.allowIfLoggedin, paymentController.destroy);

orderServiceRouter.post('/parcel/:id_payment', sessionController.allowIfLoggedin, parcelController.store);
orderServiceRouter.get('/parcels', sessionController.allowIfLoggedin, parcelController.index);
orderServiceRouter.put('/parcel/:id_parcel', sessionController.allowIfLoggedin, parcelController.update);
orderServiceRouter.delete('/parcel/:id_parcel', sessionController.allowIfLoggedin, parcelController.destroy);

module.exports = orderServiceRouter;
