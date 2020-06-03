const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const providerController = require('../controllers/stockEnvironment/providerController');
const familyController = require('../controllers/stockEnvironment/familyController');
const productController = require('../controllers/stockEnvironment/productController');
const acquisitionController = require('../controllers/stockEnvironment/acquisitionController');
const productAcquisitionController = require('../controllers/stockEnvironment/productAcquisitionController');

const stockRouter = Router();

stockRouter.post('/provider', authMiddleware, providerController.store);
stockRouter.get('/providers', authMiddleware, providerController.index);
stockRouter.get('/provider/:id_provider', authMiddleware, providerController.show);
stockRouter.put('/provider/:id_provider', authMiddleware, providerController.update);
stockRouter.delete('/provider/:id_provider', authMiddleware, providerController.destroy);

stockRouter.post('/family', authMiddleware, familyController.store);
stockRouter.get('/families', authMiddleware, familyController.index);
stockRouter.get('/family/:id_family', authMiddleware, familyController.show);
stockRouter.put('/family/:id_family', authMiddleware, familyController.update);
stockRouter.delete('/family/:id_family', authMiddleware, familyController.destroy);

stockRouter.post('/product', authMiddleware, productController.store);
stockRouter.get('/products', authMiddleware, productController.index);
stockRouter.get('/product/:id_product', authMiddleware, productController.show);
stockRouter.put('/product/:id_product', authMiddleware, productController.update);
stockRouter.delete('/product/:id_product', authMiddleware, productController.destroy);

stockRouter.post('/acquisition', authMiddleware, acquisitionController.store);
stockRouter.get('/acquisitions', authMiddleware, acquisitionController.index);
stockRouter.get('/acquisition/:id_acquisition', authMiddleware, acquisitionController.show);
stockRouter.put('/acquisition/:id_acquisition', authMiddleware, acquisitionController.update);
stockRouter.delete('/acquisition/:id_acquisition', authMiddleware, acquisitionController.destroy);

stockRouter.get('/product/acquisition/:id_prod_acq', authMiddleware, productAcquisitionController.show);

module.exports = stockRouter;
