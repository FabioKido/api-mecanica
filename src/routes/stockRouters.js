const { Router } = require('express');

const providerController = require('../controllers/stockEnvironment/providerController');

const stockRouter = Router();

stockRouter.post('/provider', providerController.addProvider);
stockRouter.get('/providers', providerController.getProviders);
stockRouter.get('/provider/:id_provider', providerController.getProvider);
stockRouter.put('/provider/:id_provider', providerController.updateProvider);
stockRouter.delete('/provider/:id_provider', providerController.deleteProvider);

module.exports = stockRouter;
