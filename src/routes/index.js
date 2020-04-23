const { Router } = require('express');

const customersRouters = require('./customersRouters');
const vehiclesRouters = require('./vehiclesRouters');

const routes = Router();

// Lembrar de fazer a autenticação

routes.use('/customers', customersRouters);
routes.use('/vehicles', vehiclesRouters);

module.exports = routes;
