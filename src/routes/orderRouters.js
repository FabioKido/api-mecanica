const { Router } = require('express');

const orderController = require('../controllers/serviceEnvironment/orderController');
const orderServiceController = require('../controllers/serviceEnvironment/orderServiceController');
const orderProductController = require('../controllers/serviceEnvironment/orderProductController');
const paymentController = require('../controllers/serviceEnvironment/paymentController');
const parcelController = require('../controllers/serviceEnvironment/parcelController');

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

orderServiceRouter.post('/order-product/:id_os', orderProductController.addOrderProduct);
orderServiceRouter.get('/order-products', orderProductController.getOrderProducts);
orderServiceRouter.put('/order-product/:id_op', orderProductController.updateOrderProduct);
orderServiceRouter.delete('/order-product/:id_op', orderProductController.deleteOrderProduct);

orderServiceRouter.post('/payment/:id_order', paymentController.addPayment);
orderServiceRouter.get('/payments', paymentController.getPayments);
orderServiceRouter.get('/payment/:id_payment', paymentController.getPayment);
orderServiceRouter.put('/payment/:id_payment', paymentController.updatePayment);
orderServiceRouter.delete('/payment/:id_payment', paymentController.deletePayment);

orderServiceRouter.post('/parcel/:id_payment', parcelController.addParcel);
orderServiceRouter.get('/parcels', parcelController.getParcels);
orderServiceRouter.put('/parcel/:id_parcel', parcelController.updateParcel);
orderServiceRouter.delete('/parcel/:id_parcel', parcelController.deleteParcel);

module.exports = orderServiceRouter;
