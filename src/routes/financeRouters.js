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

financeRouter.post('/category', categoryController.addCategory);
financeRouter.get('/categories', categoryController.getCategories);
financeRouter.get('/category/:id_category', categoryController.getCategory);
financeRouter.put('/category/:id_category', categoryController.updateCategory);
financeRouter.delete('/category/:id_category', categoryController.deleteCategory);

financeRouter.post('/account', accountController.addAccount);
financeRouter.get('/accounts', accountController.getAccounts);
financeRouter.get('/account/:id_account', accountController.getAccount);
financeRouter.put('/account/:id_account', accountController.updateAccount);
financeRouter.delete('/account/:id_account', accountController.deleteAccount);

financeRouter.post('/method', paymentMethodController.addPaymentMethod);
financeRouter.get('/methods', paymentMethodController.getPaymentMethods);
financeRouter.get('/method/:id_payment_method', paymentMethodController.getPaymentMethod);
financeRouter.put('/method/:id_payment_method', paymentMethodController.updatePaymentMethod);
financeRouter.delete('/method/:id_payment_method', paymentMethodController.deletePaymentMethod);

financeRouter.post('/transfer', transferController.addTransfer);
financeRouter.get('/transfers', transferController.getTransfers);
financeRouter.get('/transfer/:id_transfer', transferController.getTransfer);
financeRouter.put('/transfer/:id_transfer', transferController.updateTransfer);
financeRouter.delete('/transfer/:id_transfer', transferController.deleteTransfer);

financeRouter.post('/recipe', recipeController.addRecipe);
financeRouter.get('/recipes', recipeController.getRecipes);
financeRouter.get('/recipe/:id_recipe', recipeController.getRecipe);
financeRouter.put('/recipe/:id_recipe', recipeController.updateRecipe);
financeRouter.delete('/recipe/:id_recipe', recipeController.deleteRecipe);

financeRouter.post('/expense', expenseController.addExpense);
financeRouter.get('/expenses', expenseController.getExpenses);
financeRouter.get('/expense/:id_expense', expenseController.getExpense);
financeRouter.put('/expense/:id_expense', expenseController.updateExpense);
financeRouter.delete('/expense/:id_expense', expenseController.deleteExpense);

financeRouter.post('/recipe-detail/:id_recipe', recipeDetailController.addRecipeDetail);
financeRouter.get('/recipe-details', recipeDetailController.getRecipeDetails);
financeRouter.put('/recipe-detail/:id_recipe_detail', recipeDetailController.updateRecipeDetail);
financeRouter.delete('/recipe-detail/:id_recipe_detail', recipeDetailController.deleteRecipeDetail);

financeRouter.post('/expense-detail/:id_expense', expenseDetailController.addExpenseDetail);
financeRouter.get('/expense-details', expenseDetailController.getExpenseDetails);
financeRouter.put('/expense-detail/:id_expense_detail', expenseDetailController.updateExpenseDetail);
financeRouter.delete('/expense-detail/:id_expense_detail', expenseDetailController.deleteExpenseDetail);

module.exports = financeRouter;
