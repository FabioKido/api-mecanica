const { Router } = require('express');

const customersRouters = require('./customersRouters');
const vehiclesRouters = require('./vehiclesRouters');
const stockRouters = require('./stockRouters');
const serviceRouters = require('./serviceRouters');
const orderServiceRouters = require('./orderServiceRouters');

const routes = Router();

// Lembrar de fazer a autenticação

routes.use('/customers', customersRouters);
routes.use('/vehicles', vehiclesRouters);
routes.use('/stock', stockRouters);
routes.use('/service', serviceRouters);
routes.use('/order', orderServiceRouters);

module.exports = routes;
