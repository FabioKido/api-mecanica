const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const CustomerDashboardController = require('../controllers/customerEnvironment/dashboardController');
const FinanceDashboardController = require('../controllers/financeEnvironment/dashboardController');

const dashboardsRouter = Router();

dashboardsRouter.get('/customers', authMiddleware, CustomerDashboardController.index);
dashboardsRouter.get('/finances', authMiddleware, FinanceDashboardController.index);

module.exports = dashboardsRouter;