const { Router } = require('express');

const serviceController = require('../controllers/serviceEnvironment/serviceController');
const scheduleController = require('../controllers/serviceEnvironment/scheduleController');
const checklistController = require('../controllers/serviceEnvironment/checklistController');
const diagnosticController = require('../controllers/serviceEnvironment/diagnosticController');
const preventiveController = require('../controllers/serviceEnvironment/preventiveController');
const recordController = require('../controllers/serviceEnvironment/recordController');
const timelineController = require('../controllers/serviceEnvironment/timelineController');

const serviceRouter = Router();

serviceRouter.post('/add', serviceController.store);
serviceRouter.get('/all', serviceController.index);
serviceRouter.get('/one/:id_service', serviceController.show);
serviceRouter.put('/one/:id_service', serviceController.update);
serviceRouter.delete('/one/:id_service', serviceController.destroy);

serviceRouter.post('/schedule', scheduleController.store);
serviceRouter.get('/schedules', scheduleController.index);
serviceRouter.get('/schedule/:id_schedule', scheduleController.show);
serviceRouter.put('/schedule/:id_schedule', scheduleController.update);
serviceRouter.delete('/schedule/:id_schedule', scheduleController.destroy);

serviceRouter.post('/diagnostic', diagnosticController.store);
serviceRouter.get('/diagnostics', diagnosticController.index);
serviceRouter.get('/diagnostic/:id_diagnostic', diagnosticController.show);
serviceRouter.put('/diagnostic/:id_diagnostic', diagnosticController.update);
serviceRouter.delete('/diagnostic/:id_diagnostic', diagnosticController.destroy);

serviceRouter.post('/checklist/:id_diagnostic', checklistController.store);
serviceRouter.get('/checklists', checklistController.index);
serviceRouter.get('/checklist/:id_checklist', checklistController.show);
serviceRouter.put('/checklist/:id_checklist', checklistController.update);
serviceRouter.delete('/checklist/:id_checklist', checklistController.destroy);

serviceRouter.post('/preventive', preventiveController.store);
serviceRouter.get('/preventives', preventiveController.index);
serviceRouter.get('/preventive/:id_preventive', preventiveController.show);
serviceRouter.put('/preventive/:id_preventive', preventiveController.update);
serviceRouter.delete('/preventive/:id_preventive', preventiveController.destroy);

serviceRouter.post('/record', recordController.store);
serviceRouter.get('/records', recordController.index);
serviceRouter.get('/record/:id_record', recordController.show);
serviceRouter.delete('/record/:id_record', recordController.destroy);

serviceRouter.post('/timeline', timelineController.store);
serviceRouter.get('/timelines', timelineController.index);
serviceRouter.get('/timeline/:id_timeline', timelineController.show);
serviceRouter.put('/timeline/:id_timeline', timelineController.update);
serviceRouter.delete('/timeline/:id_timeline', timelineController.destroy);

module.exports = serviceRouter;
