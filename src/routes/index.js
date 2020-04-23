const { Router } = require('express');
const customersRouter = require('./customersRouters');

const routes = Router();

// Lembrar de fazer a autenticação

routes.use('/customers', customersRouter);

module.exports = routes;
