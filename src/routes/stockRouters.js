const { Router } = require('express');

const providerController = require('../controllers/stockEnvironment/providerController');
const familyController = require('../controllers/stockEnvironment/familyController');
const productController = require('../controllers/stockEnvironment/productController');
const acquisitionController = require('../controllers/stockEnvironment/acquisitionController');
const productAcquisitionController = require('../controllers/stockEnvironment/productAcquisitionController');

const stockRouter = Router();

stockRouter.post('/provider', providerController.store);
stockRouter.get('/providers', providerController.index);
stockRouter.get('/provider/:id_provider', providerController.show);
stockRouter.put('/provider/:id_provider', providerController.update);
stockRouter.delete('/provider/:id_provider', providerController.destroy);

stockRouter.post('/family', familyController.store);
stockRouter.get('/families', familyController.index);
stockRouter.get('/family/:id_family', familyController.show);
stockRouter.put('/family/:id_family', familyController.update);
stockRouter.delete('/family/:id_family', familyController.destroy);

stockRouter.post('/product', productController.store);
stockRouter.get('/products', productController.index);
stockRouter.get('/product/:id_product', productController.show);
stockRouter.put('/product/:id_product', productController.update);
stockRouter.delete('/product/:id_product', productController.destroy);

stockRouter.post('/acquisition', acquisitionController.store);
stockRouter.get('/acquisitions', acquisitionController.index);
stockRouter.get('/acquisition/:id_acquisition', acquisitionController.show);
stockRouter.put('/acquisition/:id_acquisition', acquisitionController.update);
stockRouter.delete('/acquisition/:id_acquisition', acquisitionController.destroy);

stockRouter.get('/product/acquisition/:id_prod_acq', productAcquisitionController.show);

module.exports = stockRouter;
