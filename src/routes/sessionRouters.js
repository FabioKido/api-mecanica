const { Router } = require('express');

const sessionRouter = Router();

const sessionController = require('../controllers/userEnvironment/sessionController');

// User and Controll
sessionRouter.post('/signup', sessionController.signup);
sessionRouter.post('/signin', sessionController.signin);

module.exports = sessionRouter;
