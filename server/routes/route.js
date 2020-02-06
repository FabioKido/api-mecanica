const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const groupController = require('../controllers/groupController');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/email', userController.allowIfLoggedin, userController.enviarEmail);

router.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);

router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);

router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);

router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

router.post('/adicionar-grupo', groupController.addGroup);

router.post('/add-permissao', groupController.addPermission);

router.get('/group/:groupId', userController.allowIfLoggedin, groupController.getGroup);

router.get('/permission/:permissionId', userController.allowIfLoggedin, groupController.getPermission);

router.get('/groups', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), groupController.getGroups);

module.exports = router;