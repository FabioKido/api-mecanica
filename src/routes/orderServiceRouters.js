const { Router } = require('express');

const orderController = require('../controllers/serviceEnvironment/orderController');
const orderServiceController = require('../controllers/serviceEnvironment/orderServiceController');
const orderProductController = require('../controllers/serviceEnvironment/orderProductController');
// const paymentController = require('../controllers/serviceEnvironment/paymentController');

const orderServiceRouter = Router();

orderServiceRouter.post('/os', orderController.addOrder);
orderServiceRouter.get('/os-all', orderController.getOrders);
orderServiceRouter.get('/os/:id_order', orderController.getOrder);
orderServiceRouter.put('/os/:id_order', orderController.updateOrder);
orderServiceRouter.delete('/os/:id_order', orderController.deleteOrder);

orderServiceRouter.post('/order-service/:id_order', orderServiceController.addOrderService);
orderServiceRouter.get('/order-services', orderServiceController.getOrderServices);
orderServiceRouter.put('/order-service/:id_os', orderServiceController.updateOrderService);
orderServiceRouter.delete('/order-service/:id_os', orderServiceController.deleteOrderService);

// orderServiceRouter.post('/os', orderController.addOrder);
// orderServiceRouter.get('/os-all', orderController.getOrders);
// orderServiceRouter.get('/os/:id_order', orderController.getOrder);
// orderServiceRouter.put('/os/:id_order', orderController.updateOrder);
// orderServiceRouter.delete('/os/:id_order', orderController.deleteOrder);

module.exports = orderServiceRouter;
