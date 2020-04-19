const express = require('express');
const router = express.Router();
const userController = require('../controllers/userEnvironment/userController');
const ownerController = require('../controllers/userEnvironment/ownerController');
const workerController = require('../controllers/userEnvironment/workerController');
const companyController = require('../controllers/userEnvironment/companyController');
const accessPlanController = require('../controllers/userEnvironment/accessPlanController');
const resourceController = require('../controllers/userEnvironment/resourceController');
const contactController = require('../controllers/userEnvironment/contactController');
const addressController = require('../controllers/userEnvironment/addressController');
const groupController = require('../controllers/userEnvironment/groupController');
const scheduleController = require('../controllers/serviceEnvironment/scheduleController');

// User and Controll
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);
router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);
router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);
router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

// Group and Permission
router.post('/add-group', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), groupController.createGroup);
router.get('/group/:groupId', userController.allowIfLoggedin, groupController.getGroup);
router.get('/groups', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), groupController.getGroups);
//router.post('/add-permission', userController.allowIfLoggedin, groupController.addPermission);
//router.get('/permission/:permissionId', userController.allowIfLoggedin, groupController.getPermission);

// User and Group
router.post('/users/:id_user/add-group', userController.allowIfLoggedin, groupController.addUserInGroup);
router.get('/users/:id_user/group', userController.allowIfLoggedin, groupController.getUserInGroup);
router.delete('/users/:id_user/del-group', userController.allowIfLoggedin, groupController.deleteUserInGroup);

// Type of Users and Contact-Address
router.post('/user/:id_user/owner', userController.allowIfLoggedin, ownerController.addOwner);
router.post('/user/:id_user/worker', userController.allowIfLoggedin, workerController.addWorker);
router.post('/user/:id_user/company', userController.allowIfLoggedin, companyController.addCompany);
router.get('/worker/:id_worker/contact', userController.allowIfLoggedin, workerController.getWorkerContact);
router.get('/worker/:id_worker/address', userController.allowIfLoggedin, workerController.getWorkerAddress);
router.get('/owner/:id_owner/contact', userController.allowIfLoggedin, ownerController.getOwnerContact);
router.get('/owner/:id_owner/address', userController.allowIfLoggedin, ownerController.getOwnerAddress);
router.get('/company/:id_company/contact', userController.allowIfLoggedin, companyController.getCompanyContact);
router.get('/company/:id_company/address', userController.allowIfLoggedin, companyController.getCompanyAddress);
router.post('/user/new-contact', userController.allowIfLoggedin, contactController.addContact);
router.post('/user/new-address', userController.allowIfLoggedin, addressController.createAddress);

// Access Plan
router.post('/plans/new-plan', userController.allowIfLoggedin, accessPlanController.addAccessPlan);
router.get('/plan/:planId', userController.allowIfLoggedin, accessPlanController.getAccessPlan);
router.get('/plans', userController.allowIfLoggedin, accessPlanController.getAccessPlans);
router.put('/plan/:planId/update-plan', userController.allowIfLoggedin, accessPlanController.updateAccessPlan);
router.delete('/plan/:planId/del-plan', userController.allowIfLoggedin, accessPlanController.deleteAccessPlan);

// Resources
router.post('/plans/:id_access_plan/new-resource', userController.allowIfLoggedin, resourceController.addResource);
router.get('/resource/:resourceId', userController.allowIfLoggedin, resourceController.getResource);
router.get('/resources', userController.allowIfLoggedin, resourceController.getResources);
router.put('/resource/:resourceId/update-resource', userController.allowIfLoggedin, resourceController.updateResource);
router.delete('/resource/:resourceId/del-resource', userController.allowIfLoggedin, resourceController.deleteResource);

router.post('/schedule', scheduleController.addSchedule);
router.get('/schedules', scheduleController.getSchedules);

module.exports = router;
