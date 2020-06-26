const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const CustomerDashboardController = require('../controllers/customerEnvironment/dashboardController');

const dashboardsRouter = Router();


dashboardsRouter.get('/customers', authMiddleware, CustomerDashboardController.index);

module.exports = dashboardsRouter;