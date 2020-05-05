const { Router } = require('express');

const userRouter = Router();

const sessionController = require('../controllers/userEnvironment/sessionController');
const userController = require('../controllers/userEnvironment/userController');
const userInfoController = require('../controllers/userEnvironment/userInfoController');
const ownerController = require('../controllers/userEnvironment/ownerController');
const workerController = require('../controllers/userEnvironment/workerController');
const companyController = require('../controllers/userEnvironment/companyController');
const accessPlanController = require('../controllers/userEnvironment/accessPlanController');
const resourceController = require('../controllers/userEnvironment/resourceController');
const groupController = require('../controllers/userEnvironment/groupController');
const userGroupController = require('../controllers/userEnvironment/userGroupController');
const permissionGroupController = require('../controllers/userEnvironment/permissionGroupController');
const permissionController = require('../controllers/userEnvironment/permissionController');

// User
userRouter.get('/info/:userId', sessionController.allowIfLoggedin, userController.show);
userRouter.get('/infos', sessionController.allowIfLoggedin, sessionController.grantAccess('readAny', 'profile'), userController.index);
userRouter.put('/info/:userId', sessionController.allowIfLoggedin, sessionController.grantAccess('updateAny', 'profile'), userController.update);
userRouter.delete('/info/:userId', sessionController.allowIfLoggedin, sessionController.grantAccess('deleteAny', 'profile'), userController.destroy);

// User Info
userRouter.get('/infos/:id_user', sessionController.allowIfLoggedin, userInfoController.show);

// Group
userRouter.post('/group', sessionController.allowIfLoggedin, sessionController.grantAccess('deleteAny', 'profile'), groupController.store);
userRouter.get('/group/:groupId', sessionController.allowIfLoggedin, groupController.show);
userRouter.get('/groups', sessionController.allowIfLoggedin, sessionController.grantAccess('readAny', 'profile'), groupController.index);
userRouter.delete('/group/:groupId', sessionController.allowIfLoggedin, groupController.destroy);

// Permission
userRouter.post('/permission', sessionController.allowIfLoggedin, permissionController.store);
userRouter.get('/permission/:permissionId', sessionController.allowIfLoggedin, permissionController.show);
userRouter.get('/permissions', sessionController.allowIfLoggedin, permissionController.index);
userRouter.delete('/permission/:permissionId', sessionController.allowIfLoggedin, permissionController.destroy);

// Access Plan
userRouter.post('/plan', sessionController.allowIfLoggedin, accessPlanController.store);
userRouter.get('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.show);
userRouter.get('/plans', sessionController.allowIfLoggedin, accessPlanController.index);
userRouter.put('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.update);
userRouter.delete('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.destroy);

// Resources
userRouter.post('/resource/:id_access_plan', sessionController.allowIfLoggedin, resourceController.store);
userRouter.get('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.show);
userRouter.get('/resources', sessionController.allowIfLoggedin, resourceController.index);
userRouter.put('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.update);
userRouter.delete('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.destroy);

// User and Group
userRouter.post('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.store);
userRouter.get('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.show);
userRouter.delete('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.destroy);

// Group and Permission
userRouter.post('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.store);
userRouter.get('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.show);
userRouter.delete('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.destroy);

// Type of Users
userRouter.post('/owner/:id_user', sessionController.allowIfLoggedin, ownerController.store);
userRouter.get('/owner/:id_owner', sessionController.allowIfLoggedin, ownerController.show);
userRouter.put('/owner/:id_owner', sessionController.allowIfLoggedin, ownerController.update);

userRouter.post('/worker/:id_user', sessionController.allowIfLoggedin, workerController.store);
userRouter.get('/worker/:id_worker', sessionController.allowIfLoggedin, workerController.show);
userRouter.get('/workers/:id_user', sessionController.allowIfLoggedin, workerController.index);
userRouter.put('/worker/:id_worker', sessionController.allowIfLoggedin, workerController.update);

userRouter.post('/company/:id_user', sessionController.allowIfLoggedin, companyController.store);
userRouter.get('/company/:id_company', sessionController.allowIfLoggedin, companyController.show);
userRouter.put('/company/:id_company', sessionController.allowIfLoggedin, companyController.update);

module.exports = userRouter;
