const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const categoryController = require('../controllers/financeEnvironment/categoryController');
const accountController = require('../controllers/financeEnvironment/accountController');
const paymentMethodController = require('../controllers/financeEnvironment/paymentMethodController');
const transferController = require('../controllers/financeEnvironment/transferController');
const recipeController = require('../controllers/financeEnvironment/recipeController');
const expenseController = require('../controllers/financeEnvironment/expenseController');
const recipeDetailController = require('../controllers/financeEnvironment/recipeDetailController');
const expenseDetailController = require('../controllers/financeEnvironment/expenseDetailController');

const financeRouter = Router();

financeRouter.post('/category', authMiddleware, categoryController.store);
financeRouter.get('/categories', authMiddleware, categoryController.index);
financeRouter.get('/category/:id_category', authMiddleware, categoryController.show);
financeRouter.put('/category/:id_category', authMiddleware, categoryController.update);
financeRouter.delete('/category/:id_category', authMiddleware, categoryController.destroy);

financeRouter.post('/account', authMiddleware, accountController.store);
financeRouter.get('/accounts', authMiddleware, accountController.index);
financeRouter.get('/account/:id_account', authMiddleware, accountController.show);
financeRouter.put('/account/:id_account', authMiddleware, accountController.update);
financeRouter.delete('/account/:id_account', authMiddleware, accountController.destroy);

financeRouter.post('/method', authMiddleware, paymentMethodController.store);
financeRouter.get('/methods', authMiddleware, paymentMethodController.index);
financeRouter.get('/method/:id_payment_method', authMiddleware, paymentMethodController.show);
financeRouter.put('/method/:id_payment_method', authMiddleware, paymentMethodController.update);
financeRouter.delete('/method/:id_payment_method', authMiddleware, paymentMethodController.destroy);

financeRouter.post('/transfer', authMiddleware, transferController.store);
financeRouter.get('/transfers', authMiddleware, transferController.index);
financeRouter.get('/transfer/:id_transfer', authMiddleware, transferController.show);
financeRouter.put('/transfer/:id_transfer', authMiddleware, transferController.update);
financeRouter.delete('/transfer/:id_transfer', authMiddleware, transferController.destroy);

financeRouter.post('/recipe', authMiddleware, recipeController.store);
financeRouter.get('/recipes', authMiddleware, recipeController.index);
financeRouter.get('/recipe/:id_recipe', authMiddleware, recipeController.show);
financeRouter.put('/recipe/:id_recipe', authMiddleware, recipeController.update);
financeRouter.delete('/recipe/:id_recipe', authMiddleware, recipeController.destroy);

financeRouter.post('/expense', authMiddleware, expenseController.store);
financeRouter.get('/expenses', authMiddleware, expenseController.index);
financeRouter.get('/expense/:id_expense', authMiddleware, expenseController.show);
financeRouter.put('/expense/:id_expense', authMiddleware, expenseController.update);
financeRouter.delete('/expense/:id_expense', authMiddleware, expenseController.destroy);

financeRouter.post('/recipe-detail/:id_recipe', authMiddleware, recipeDetailController.store);
financeRouter.get('/recipe-details', authMiddleware, recipeDetailController.index);
financeRouter.put('/recipe-detail/:id_recipe_detail', authMiddleware, recipeDetailController.update);
financeRouter.delete('/recipe-detail/:id_recipe_detail', authMiddleware, recipeDetailController.destroy);

financeRouter.post('/expense-detail/:id_expense', authMiddleware, expenseDetailController.store);
financeRouter.get('/expense-details', authMiddleware, expenseDetailController.index);
financeRouter.put('/expense-detail/:id_expense_detail', authMiddleware, expenseDetailController.update);
financeRouter.delete('/expense-detail/:id_expense_detail', authMiddleware, expenseDetailController.destroy);

module.exports = financeRouter;
