const express = require('express');

const userRouter = express.Router();

const sessionController = require('../controllers/userEnvironment/sessionController');
const userController = require('../controllers/userEnvironment/userController');
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
userRouter.get('/info/:userId', sessionController.allowIfLoggedin, userController.getUser);
userRouter.get('/infos/:id_user', sessionController.allowIfLoggedin, userController.getUserInfo);
userRouter.get('/infos', sessionController.allowIfLoggedin, sessionController.grantAccess('readAny', 'profile'), userController.getUsers);
userRouter.put('/info/:userId', sessionController.allowIfLoggedin, sessionController.grantAccess('updateAny', 'profile'), userController.updateUser);
userRouter.delete('/info/:userId', sessionController.allowIfLoggedin, sessionController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

// Group
userRouter.post('/group', sessionController.allowIfLoggedin, sessionController.grantAccess('deleteAny', 'profile'), groupController.createGroup);
userRouter.get('/group/:groupId', sessionController.allowIfLoggedin, groupController.getGroup);
userRouter.get('/groups', sessionController.allowIfLoggedin, sessionController.grantAccess('readAny', 'profile'), groupController.getGroups);
userRouter.delete('/group/:groupId', sessionController.allowIfLoggedin, groupController.deleteGroup);

// Permission
userRouter.post('/permission', sessionController.allowIfLoggedin, permissionController.createPermission);
userRouter.get('/permission/:permissionId', sessionController.allowIfLoggedin, permissionController.getPermission);
userRouter.get('/permissions', sessionController.allowIfLoggedin, permissionController.getPermissions);
userRouter.delete('/permission/:permissionId', sessionController.allowIfLoggedin, permissionController.deletePermission);

// Group and Permission
userRouter.post('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.addPermissionInGroup);
userRouter.get('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.getPermissionInGroup);
userRouter.delete('/permission/group/:id_permission', sessionController.allowIfLoggedin, permissionGroupController.deletePermissionInGroup);

// User and Group
userRouter.post('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.addUserInGroup);
userRouter.get('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.getUserInGroup);
userRouter.delete('/in/group/:id_user', sessionController.allowIfLoggedin, userGroupController.deleteUserInGroup);

// Type of Users and Contact-Address
userRouter.post('/owner/:id_user', sessionController.allowIfLoggedin, ownerController.addOwner);
userRouter.get('/owner/:id_owner', sessionController.allowIfLoggedin, ownerController.getOwner);
userRouter.put('/owner/:id_owner', sessionController.allowIfLoggedin, ownerController.updateOwner);

userRouter.post('/worker/:id_user', sessionController.allowIfLoggedin, workerController.addWorker);
userRouter.get('/workers/:id_user', sessionController.allowIfLoggedin, workerController.getUsersWorkers);
userRouter.get('/worker/:id_worker', sessionController.allowIfLoggedin, workerController.getWorker);
userRouter.put('/worker/:id_worker', sessionController.allowIfLoggedin, workerController.updateWorker);

userRouter.post('/company/:id_user', sessionController.allowIfLoggedin, companyController.addCompany);
userRouter.get('/company/:id_company', sessionController.allowIfLoggedin, companyController.getCompany);
userRouter.put('/company/:id_company', sessionController.allowIfLoggedin, companyController.updateCompany);

// Access Plan
userRouter.post('/plan', sessionController.allowIfLoggedin, accessPlanController.addAccessPlan);
userRouter.get('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.getAccessPlan);
userRouter.get('/plans', sessionController.allowIfLoggedin, accessPlanController.getAccessPlans);
userRouter.put('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.updateAccessPlan);
userRouter.delete('/plan/:planId', sessionController.allowIfLoggedin, accessPlanController.deleteAccessPlan);

// Resources
userRouter.post('/resource/:id_access_plan', sessionController.allowIfLoggedin, resourceController.addResource);
userRouter.get('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.getResource);
userRouter.get('/resources', sessionController.allowIfLoggedin, resourceController.getResources);
userRouter.put('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.updateResource);
userRouter.delete('/resource/:resourceId', sessionController.allowIfLoggedin, resourceController.deleteResource);

module.exports = userRouter;
