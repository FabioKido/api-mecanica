const express = require('express');

const sessionRouter = express.Router();

const sessionController = require('../controllers/userEnvironment/sessionController');

// User and Controll
sessionRouter.post('/signup', sessionController.signup);
sessionRouter.post('/signin', sessionController.login);

module.exports = sessionRouter;
