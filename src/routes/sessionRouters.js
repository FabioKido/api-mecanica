const { Router } = require('express');

const sessionRouter = Router();

const sessionController = require('../controllers/userEnvironment/sessionController');

// User and Controll
sessionRouter.post('/signup', sessionController.signup);
sessionRouter.post('/signin', sessionController.signin);
sessionRouter.post('/create', sessionController.allowIfLoggedin, sessionController.signupWorker);

module.exports = sessionRouter;
