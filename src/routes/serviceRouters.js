const { Router } = require('express');

const sessionController = require('../controllers/userEnvironment/sessionController');
const serviceController = require('../controllers/serviceEnvironment/serviceController');
const scheduleController = require('../controllers/serviceEnvironment/scheduleController');
const checklistController = require('../controllers/serviceEnvironment/checklistController');
const diagnosticController = require('../controllers/serviceEnvironment/diagnosticController');
const preventiveController = require('../controllers/serviceEnvironment/preventiveController');
const recordController = require('../controllers/serviceEnvironment/recordController');
const timelineController = require('../controllers/serviceEnvironment/timelineController');

const serviceRouter = Router();

serviceRouter.post('/add', sessionController.allowIfLoggedin, serviceController.store);
serviceRouter.get('/all', sessionController.allowIfLoggedin, serviceController.index);
serviceRouter.get('/one/:id_service', sessionController.allowIfLoggedin, serviceController.show);
serviceRouter.put('/one/:id_service', sessionController.allowIfLoggedin, serviceController.update);
serviceRouter.delete('/one/:id_service', sessionController.allowIfLoggedin, serviceController.destroy);

serviceRouter.post('/schedule', sessionController.allowIfLoggedin, scheduleController.store);
serviceRouter.get('/schedules', sessionController.allowIfLoggedin, scheduleController.index);
serviceRouter.get('/schedule/:id_schedule', sessionController.allowIfLoggedin, scheduleController.show);
serviceRouter.put('/schedule/:id_schedule', sessionController.allowIfLoggedin, scheduleController.update);
serviceRouter.delete('/schedule/:id_schedule', sessionController.allowIfLoggedin, scheduleController.destroy);

serviceRouter.post('/diagnostic', sessionController.allowIfLoggedin, diagnosticController.store);
serviceRouter.get('/diagnostics', sessionController.allowIfLoggedin, diagnosticController.index);
serviceRouter.get('/diagnostic/:id_diagnostic', sessionController.allowIfLoggedin, diagnosticController.show);
serviceRouter.put('/diagnostic/:id_diagnostic', sessionController.allowIfLoggedin, diagnosticController.update);
serviceRouter.delete('/diagnostic/:id_diagnostic', sessionController.allowIfLoggedin, diagnosticController.destroy);

serviceRouter.post('/checklist/:id_diagnostic', sessionController.allowIfLoggedin, checklistController.store);
serviceRouter.get('/checklists', sessionController.allowIfLoggedin, checklistController.index);
serviceRouter.get('/checklist/:id_checklist', sessionController.allowIfLoggedin, checklistController.show);
serviceRouter.put('/checklist/:id_checklist', sessionController.allowIfLoggedin, checklistController.update);
serviceRouter.delete('/checklist/:id_checklist', sessionController.allowIfLoggedin, checklistController.destroy);

serviceRouter.post('/preventive', sessionController.allowIfLoggedin, preventiveController.store);
serviceRouter.get('/preventives', sessionController.allowIfLoggedin, preventiveController.index);
serviceRouter.get('/preventive/:id_preventive', sessionController.allowIfLoggedin, preventiveController.show);
serviceRouter.put('/preventive/:id_preventive', sessionController.allowIfLoggedin, preventiveController.update);
serviceRouter.delete('/preventive/:id_preventive', sessionController.allowIfLoggedin, preventiveController.destroy);

serviceRouter.post('/record', sessionController.allowIfLoggedin, recordController.store);
serviceRouter.get('/records', sessionController.allowIfLoggedin, recordController.index);
serviceRouter.get('/record/:id_record', sessionController.allowIfLoggedin, recordController.show);
serviceRouter.delete('/record/:id_record', sessionController.allowIfLoggedin, recordController.destroy);

serviceRouter.post('/timeline', sessionController.allowIfLoggedin, timelineController.store);
serviceRouter.get('/timelines', sessionController.allowIfLoggedin, timelineController.index);
serviceRouter.get('/timeline/:id_timeline', sessionController.allowIfLoggedin, timelineController.show);
serviceRouter.put('/timeline/:id_timeline', sessionController.allowIfLoggedin, timelineController.update);
serviceRouter.delete('/timeline/:id_timeline', sessionController.allowIfLoggedin, timelineController.destroy);

module.exports = serviceRouter;
