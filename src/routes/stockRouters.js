const { Router } = require('express');

const providerController = require('../controllers/stockEnvironment/providerController');
const familyController = require('../controllers/stockEnvironment/familyController');

const stockRouter = Router();

stockRouter.post('/provider', providerController.addProvider);
stockRouter.get('/providers', providerController.getProviders);
stockRouter.get('/provider/:id_provider', providerController.getProvider);
stockRouter.put('/provider/:id_provider', providerController.updateProvider);
stockRouter.delete('/provider/:id_provider', providerController.deleteProvider);

stockRouter.post('/family', familyController.addFamily);
stockRouter.get('/families', familyController.getFamilies);
stockRouter.get('/family/:id_family', familyController.getFamily);
stockRouter.put('/family/:id_family', familyController.updateFamily);
stockRouter.delete('/family/:id_family', familyController.deleteFamily);

module.exports = stockRouter;
