const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const ownerController = require('../controllers/ownerController');
const workerController = require('../controllers/workerController');
const companyController = require('../controllers/companyController');
const accessPlanController = require('../controllers/accessPlanController');
const contactController = require('../controllers/contactController');
const groupController = require('../controllers/groupController');

//User and Controll
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);
router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);
router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);
router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

//Group and Permission
router.post('/add-group', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), groupController.createGroup);
router.get('/group/:groupId', userController.allowIfLoggedin, groupController.getGroup);
router.get('/groups', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), groupController.getGroups);
//router.post('/add-permission', userController.allowIfLoggedin, groupController.addPermission);
//router.get('/permission/:permissionId', userController.allowIfLoggedin, groupController.getPermission);

//User and Group
router.post('/users/:id_user/add-group', userController.allowIfLoggedin, groupController.addUserInGroup);
router.get('/users/:id_user/group', userController.allowIfLoggedin, groupController.getUserInGroup);
router.delete('/users/:id_user/del-group', userController.allowIfLoggedin, groupController.deleteUserInGroup);

//User and Contact
router.post('/user/:id_user/owner', userController.allowIfLoggedin, ownerController.addOwner);
router.post('/user/:id_user/worker', userController.allowIfLoggedin, workerController.addWorker);
router.post('/user/:id_user/company', userController.allowIfLoggedin, companyController.addCompany);
router.get('/worker/:id_worker/contact', userController.allowIfLoggedin, workerController.getWorkerContact);
router.post('/user/new-contact', userController.allowIfLoggedin, contactController.addContact);

//Access Plan and Resources
router.post('/plans/new-plan', userController.allowIfLoggedin, accessPlanController.addAccessPlan);
router.get('/plan/:planId', userController.allowIfLoggedin, accessPlanController.getAccessPlan);
router.get('/plans', userController.allowIfLoggedin, accessPlanController.getAccessPlans);
router.put('/plan/:planId/update-plan', userController.allowIfLoggedin, accessPlanController.updateAccessPlan);
router.delete('/plan/:planId/del-plan', userController.allowIfLoggedin, accessPlanController.deleteAccessPlan);
router.post('/plans/:id_access_plan/new-resource', userController.allowIfLoggedin, accessPlanController.addResource);
router.get('/resource/:resourceId', userController.allowIfLoggedin, accessPlanController.getResource);
router.get('/resources', userController.allowIfLoggedin, accessPlanController.getResources);
router.put('/resource/:resourceId/update-resource', userController.allowIfLoggedin, accessPlanController.updateResource);
router.delete('/resource/:resourceId/del-resource', userController.allowIfLoggedin, accessPlanController.deleteResource);

module.exports = router;