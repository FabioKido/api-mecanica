const { Router } = require('express');

const sessionController = require('../controllers/userEnvironment/sessionController');
const categoryController = require('../controllers/financeEnvironment/categoryController');
const accountController = require('../controllers/financeEnvironment/accountController');
const paymentMethodController = require('../controllers/financeEnvironment/paymentMethodController');
const transferController = require('../controllers/financeEnvironment/transferController');
const recipeController = require('../controllers/financeEnvironment/recipeController');
const expenseController = require('../controllers/financeEnvironment/expenseController');
const recipeDetailController = require('../controllers/financeEnvironment/recipeDetailController');
const expenseDetailController = require('../controllers/financeEnvironment/expenseDetailController');

const financeRouter = Router();

financeRouter.post('/category', sessionController.allowIfLoggedin, categoryController.store);
financeRouter.get('/categories', sessionController.allowIfLoggedin, categoryController.index);
financeRouter.get('/category/:id_category', sessionController.allowIfLoggedin, categoryController.show);
financeRouter.put('/category/:id_category', sessionController.allowIfLoggedin, categoryController.update);
financeRouter.delete('/category/:id_category', sessionController.allowIfLoggedin, categoryController.destroy);

financeRouter.post('/account', sessionController.allowIfLoggedin, accountController.store);
financeRouter.get('/accounts', sessionController.allowIfLoggedin, accountController.index);
financeRouter.get('/account/:id_account', sessionController.allowIfLoggedin, accountController.show);
financeRouter.put('/account/:id_account', sessionController.allowIfLoggedin, accountController.update);
financeRouter.delete('/account/:id_account', sessionController.allowIfLoggedin, accountController.destroy);

financeRouter.post('/method', sessionController.allowIfLoggedin, paymentMethodController.store);
financeRouter.get('/methods', sessionController.allowIfLoggedin, paymentMethodController.index);
financeRouter.get('/method/:id_payment_method', sessionController.allowIfLoggedin, paymentMethodController.show);
financeRouter.put('/method/:id_payment_method', sessionController.allowIfLoggedin, paymentMethodController.update);
financeRouter.delete('/method/:id_payment_method', sessionController.allowIfLoggedin, paymentMethodController.destroy);

financeRouter.post('/transfer', sessionController.allowIfLoggedin, transferController.store);
financeRouter.get('/transfers', sessionController.allowIfLoggedin, transferController.index);
financeRouter.get('/transfer/:id_transfer', sessionController.allowIfLoggedin, transferController.show);
financeRouter.put('/transfer/:id_transfer', sessionController.allowIfLoggedin, transferController.update);
financeRouter.delete('/transfer/:id_transfer', sessionController.allowIfLoggedin, transferController.destroy);

financeRouter.post('/recipe', sessionController.allowIfLoggedin, recipeController.store);
financeRouter.get('/recipes', sessionController.allowIfLoggedin, recipeController.index);
financeRouter.get('/recipe/:id_recipe', sessionController.allowIfLoggedin, recipeController.show);
financeRouter.put('/recipe/:id_recipe', sessionController.allowIfLoggedin, recipeController.update);
financeRouter.delete('/recipe/:id_recipe', sessionController.allowIfLoggedin, recipeController.destroy);

financeRouter.post('/expense', sessionController.allowIfLoggedin, expenseController.store);
financeRouter.get('/expenses', sessionController.allowIfLoggedin, expenseController.index);
financeRouter.get('/expense/:id_expense', sessionController.allowIfLoggedin, expenseController.show);
financeRouter.put('/expense/:id_expense', sessionController.allowIfLoggedin, expenseController.update);
financeRouter.delete('/expense/:id_expense', sessionController.allowIfLoggedin, expenseController.destroy);

financeRouter.post('/recipe-detail/:id_recipe', sessionController.allowIfLoggedin, recipeDetailController.store);
financeRouter.get('/recipe-details', sessionController.allowIfLoggedin, recipeDetailController.index);
financeRouter.put('/recipe-detail/:id_recipe_detail', sessionController.allowIfLoggedin, recipeDetailController.update);
financeRouter.delete('/recipe-detail/:id_recipe_detail', sessionController.allowIfLoggedin, recipeDetailController.destroy);

financeRouter.post('/expense-detail/:id_expense', sessionController.allowIfLoggedin, expenseDetailController.store);
financeRouter.get('/expense-details', sessionController.allowIfLoggedin, expenseDetailController.index);
financeRouter.put('/expense-detail/:id_expense_detail', sessionController.allowIfLoggedin, expenseDetailController.update);
financeRouter.delete('/expense-detail/:id_expense_detail', sessionController.allowIfLoggedin, expenseDetailController.destroy);

module.exports = financeRouter;
