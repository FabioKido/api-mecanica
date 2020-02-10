const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const ownerController = require('../controllers/ownerController');
const workerController = require('../controllers/workerController');
const companyController = require('../controllers/companyController');
const accessPlanController = require('../controllers/accessPlanController');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);

router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);

router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);

router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

//router.post('/adicionar-grupo', groupController.addGroup);

//router.post('/add-permissao', groupController.addPermission);

//router.get('/group/:groupId', userController.allowIfLoggedin, groupController.getGroup);

//router.get('/permission/:permissionId', userController.allowIfLoggedin, groupController.getPermission);

//router.get('/groups', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), groupController.getGroups);

router.post('/user/:id_user/owner', userController.allowIfLoggedin, ownerController.addOwner);
router.post('/user/:id_user/worker', userController.allowIfLoggedin, workerController.addWorker);
router.post('/user/:id_user/company', userController.allowIfLoggedin, companyController.addCompany);

router.post('/plans/new-plan', userController.allowIfLoggedin, accessPlanController.addAccessPlan);
router.post('/plans/:id_access_plan/new-resource', userController.allowIfLoggedin, accessPlanController.addResource);

module.exports = router;