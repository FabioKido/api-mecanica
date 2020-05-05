const { Router } = require('express');

const sessionController = require('../controllers/userEnvironment/sessionController');
const providerController = require('../controllers/stockEnvironment/providerController');
const familyController = require('../controllers/stockEnvironment/familyController');
const productController = require('../controllers/stockEnvironment/productController');
const acquisitionController = require('../controllers/stockEnvironment/acquisitionController');
const productAcquisitionController = require('../controllers/stockEnvironment/productAcquisitionController');

const stockRouter = Router();

stockRouter.post('/provider', sessionController.allowIfLoggedin, providerController.store);
stockRouter.get('/providers', sessionController.allowIfLoggedin, providerController.index);
stockRouter.get('/provider/:id_provider', sessionController.allowIfLoggedin, providerController.show);
stockRouter.put('/provider/:id_provider', sessionController.allowIfLoggedin, providerController.update);
stockRouter.delete('/provider/:id_provider', sessionController.allowIfLoggedin, providerController.destroy);

stockRouter.post('/family', sessionController.allowIfLoggedin, familyController.store);
stockRouter.get('/families', sessionController.allowIfLoggedin, familyController.index);
stockRouter.get('/family/:id_family', sessionController.allowIfLoggedin, familyController.show);
stockRouter.put('/family/:id_family', sessionController.allowIfLoggedin, familyController.update);
stockRouter.delete('/family/:id_family', sessionController.allowIfLoggedin, familyController.destroy);

stockRouter.post('/product', sessionController.allowIfLoggedin, productController.store);
stockRouter.get('/products', sessionController.allowIfLoggedin, productController.index);
stockRouter.get('/product/:id_product', sessionController.allowIfLoggedin, productController.show);
stockRouter.put('/product/:id_product', sessionController.allowIfLoggedin, productController.update);
stockRouter.delete('/product/:id_product', sessionController.allowIfLoggedin, productController.destroy);

stockRouter.post('/acquisition', sessionController.allowIfLoggedin, acquisitionController.store);
stockRouter.get('/acquisitions', sessionController.allowIfLoggedin, acquisitionController.index);
stockRouter.get('/acquisition/:id_acquisition', sessionController.allowIfLoggedin, acquisitionController.show);
stockRouter.put('/acquisition/:id_acquisition', sessionController.allowIfLoggedin, acquisitionController.update);
stockRouter.delete('/acquisition/:id_acquisition', sessionController.allowIfLoggedin, acquisitionController.destroy);

stockRouter.get('/product/acquisition/:id_prod_acq', sessionController.allowIfLoggedin, productAcquisitionController.show);

module.exports = stockRouter;
