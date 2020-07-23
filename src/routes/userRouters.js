const { Router } = require('express');

const userRouter = Router();

const authMiddleware = require('../middlewares/auth');

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
userRouter.get('/info', authMiddleware, userController.show);
userRouter.get('/infos', authMiddleware, userController.index);
userRouter.put('/info/:userId', authMiddleware, userController.update);
userRouter.delete('/info/:userId', authMiddleware, userController.destroy);

// User Info
userRouter.get('/inf', authMiddleware, userInfoController.show);

// Group
userRouter.post('/group', authMiddleware, groupController.store);
userRouter.get('/group/:groupId', authMiddleware, groupController.show);
userRouter.get('/groups', authMiddleware, groupController.index);
userRouter.put('/group/:groupId', authMiddleware, groupController.update);
userRouter.delete('/group/:groupId', authMiddleware, groupController.destroy);

// Permission
userRouter.post('/permission', authMiddleware, permissionController.store);
userRouter.get('/permission/:permissionId', authMiddleware, permissionController.show);
userRouter.get('/permissions', authMiddleware, permissionController.index);
userRouter.delete('/permission/:permissionId', authMiddleware, permissionController.destroy);

// Access Plan
userRouter.post('/plan', authMiddleware, accessPlanController.store);
userRouter.get('/plan/:planId', authMiddleware, accessPlanController.show);
userRouter.get('/plans', authMiddleware, accessPlanController.index);
userRouter.put('/plan/:planId', authMiddleware, accessPlanController.update);
userRouter.delete('/plan/:planId', authMiddleware, accessPlanController.destroy);

// Resources
userRouter.post('/resource/:id_access_plan', authMiddleware, resourceController.store);
userRouter.get('/resource/:resourceId', authMiddleware, resourceController.show);
userRouter.get('/resources', authMiddleware, resourceController.index);
userRouter.put('/resource/:resourceId', authMiddleware, resourceController.update);
userRouter.delete('/resource/:resourceId', authMiddleware, resourceController.destroy);

// User and Group
userRouter.post('/in/group/:id_user', authMiddleware, userGroupController.store);
userRouter.get('/in/group/:id_user', authMiddleware, userGroupController.show);
userRouter.delete('/in/group/:id_user', authMiddleware, userGroupController.destroy);

// Group and Permission
userRouter.post('/permission/group/:id_permission', authMiddleware, permissionGroupController.store);
userRouter.get('/permission/group/:id_permission', authMiddleware, permissionGroupController.show);
userRouter.delete('/permission/group/:id_permission', authMiddleware, permissionGroupController.destroy);
userRouter.get('/permissions/group', authMiddleware, permissionGroupController.index);

// Type of Users
userRouter.get('/owner/:id_user', authMiddleware, ownerController.show);
userRouter.put('/owner/:id_owner', authMiddleware, ownerController.update);

userRouter.get('/worker/:id_user', authMiddleware, workerController.show);
userRouter.get('/workers', authMiddleware, workerController.index);
userRouter.put('/worker/:id_worker', authMiddleware, workerController.update);

userRouter.get('/company/:id_user', authMiddleware, companyController.show);
userRouter.put('/company/:id_company', authMiddleware, companyController.update);

module.exports = userRouter;
