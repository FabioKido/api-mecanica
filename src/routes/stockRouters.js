const { Router } = require('express');

const providerController = require('../controllers/stockEnvironment/providerController');
const familyController = require('../controllers/stockEnvironment/familyController');
const productController = require('../controllers/stockEnvironment/productController');
const acquisitionController = require('../controllers/stockEnvironment/acquisitionController');
const productAcquisitionController = require('../controllers/stockEnvironment/productAcquisitionController');

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

stockRouter.post('/product', productController.addProduct);
stockRouter.get('/products', productController.getProducts);
stockRouter.get('/product/:id_product', productController.getProduct);
stockRouter.put('/product/:id_product', productController.updateProduct);
stockRouter.delete('/product/:id_product', productController.deleteProduct);

stockRouter.post('/acquisition', acquisitionController.addAcquisition);
stockRouter.get('/acquisitions', acquisitionController.getAcquisitions);
stockRouter.get('/acquisition/:id_acquisition', acquisitionController.getAcquisition);
stockRouter.put('/acquisition/:id_acquisition', acquisitionController.updateAcquisition);
stockRouter.delete('/acquisition/:id_acquisition', acquisitionController.deleteAcquisition);

stockRouter.get('/product/acquisition/:id_prod_acq', productAcquisitionController.getProductAcquisition);

module.exports = stockRouter;
