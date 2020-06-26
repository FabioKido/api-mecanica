const { Router } = require('express');

const sessionRouters = require('./sessionRouters');
const userRouters = require('./userRouters');
const customersRouters = require('./customersRouters');
const vehiclesRouters = require('./vehiclesRouters');
const stockRouters = require('./stockRouters');
const serviceRouters = require('./serviceRouters');
const orderRouters = require('./orderRouters');
const financeRouters = require('./financeRouters');
const dashboardsRouters = require('./dashboardsRouters');

const routes = Router();

// Lembrar de fazer a autenticação

routes.use('/session', sessionRouters);
routes.use('/user', userRouters);
routes.use('/customers', customersRouters);
routes.use('/vehicles', vehiclesRouters);
routes.use('/stock', stockRouters);
routes.use('/service', serviceRouters);
routes.use('/order', orderRouters);
routes.use('/finance', financeRouters);
routes.use('/dashboard', dashboardsRouters);

module.exports = routes;
