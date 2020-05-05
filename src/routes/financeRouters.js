const { Router } = require('express');

const categoryController = require('../controllers/financeEnvironment/categoryController');
const accountController = require('../controllers/financeEnvironment/accountController');
const paymentMethodController = require('../controllers/financeEnvironment/paymentMethodController');
const transferController = require('../controllers/financeEnvironment/transferController');
const recipeController = require('../controllers/financeEnvironment/recipeController');
const expenseController = require('../controllers/financeEnvironment/expenseController');
const recipeDetailController = require('../controllers/financeEnvironment/recipeDetailController');
const expenseDetailController = require('../controllers/financeEnvironment/expenseDetailController');

const financeRouter = Router();

financeRouter.post('/category', categoryController.store);
financeRouter.get('/categories', categoryController.index);
financeRouter.get('/category/:id_category', categoryController.show);
financeRouter.put('/category/:id_category', categoryController.update);
financeRouter.delete('/category/:id_category', categoryController.destroy);

financeRouter.post('/account', accountController.store);
financeRouter.get('/accounts', accountController.index);
financeRouter.get('/account/:id_account', accountController.show);
financeRouter.put('/account/:id_account', accountController.update);
financeRouter.delete('/account/:id_account', accountController.destroy);

financeRouter.post('/method', paymentMethodController.store);
financeRouter.get('/methods', paymentMethodController.index);
financeRouter.get('/method/:id_payment_method', paymentMethodController.show);
financeRouter.put('/method/:id_payment_method', paymentMethodController.update);
financeRouter.delete('/method/:id_payment_method', paymentMethodController.destroy);

financeRouter.post('/transfer', transferController.store);
financeRouter.get('/transfers', transferController.index);
financeRouter.get('/transfer/:id_transfer', transferController.show);
financeRouter.put('/transfer/:id_transfer', transferController.update);
financeRouter.delete('/transfer/:id_transfer', transferController.destroy);

financeRouter.post('/recipe', recipeController.store);
financeRouter.get('/recipes', recipeController.index);
financeRouter.get('/recipe/:id_recipe', recipeController.show);
financeRouter.put('/recipe/:id_recipe', recipeController.update);
financeRouter.delete('/recipe/:id_recipe', recipeController.destroy);

financeRouter.post('/expense', expenseController.store);
financeRouter.get('/expenses', expenseController.index);
financeRouter.get('/expense/:id_expense', expenseController.show);
financeRouter.put('/expense/:id_expense', expenseController.update);
financeRouter.delete('/expense/:id_expense', expenseController.destroy);

financeRouter.post('/recipe-detail/:id_recipe', recipeDetailController.store);
financeRouter.get('/recipe-details', recipeDetailController.index);
financeRouter.put('/recipe-detail/:id_recipe_detail', recipeDetailController.update);
financeRouter.delete('/recipe-detail/:id_recipe_detail', recipeDetailController.destroy);

financeRouter.post('/expense-detail/:id_expense', expenseDetailController.store);
financeRouter.get('/expense-details', expenseDetailController.index);
financeRouter.put('/expense-detail/:id_expense_detail', expenseDetailController.update);
financeRouter.delete('/expense-detail/:id_expense_detail', expenseDetailController.destroy);

module.exports = financeRouter;
