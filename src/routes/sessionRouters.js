const { Router } = require('express');

const sessionRouter = Router();

const authMiddleware = require('../middlewares/auth');

const sessionController = require('../controllers/userEnvironment/sessionController');

// User and Controll
sessionRouter.post('/signup', sessionController.signup);
sessionRouter.post('/signin', sessionController.signin);
sessionRouter.post('/create', authMiddleware, sessionController.signupWorker);

module.exports = sessionRouter;
