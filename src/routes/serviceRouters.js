const { Router } = require('express');

const authMiddleware = require('../middlewares/auth');

const serviceController = require('../controllers/serviceEnvironment/serviceController');
const scheduleController = require('../controllers/serviceEnvironment/scheduleController');
const checklistController = require('../controllers/serviceEnvironment/checklistController');
const diagnosticController = require('../controllers/serviceEnvironment/diagnosticController');
const preventiveController = require('../controllers/serviceEnvironment/preventiveController');
const recordController = require('../controllers/serviceEnvironment/recordController');
const timelineController = require('../controllers/serviceEnvironment/timelineController');
const timelineDetailController = require('../controllers/serviceEnvironment/timelineDetailController');

const serviceRouter = Router();

serviceRouter.post('/add', authMiddleware, serviceController.store);
serviceRouter.get('/all', authMiddleware, serviceController.index);
serviceRouter.get('/one/:id_service', authMiddleware, serviceController.show);
serviceRouter.put('/one/:id_service', authMiddleware, serviceController.update);
serviceRouter.delete('/one/:id_service', authMiddleware, serviceController.destroy);

serviceRouter.post('/schedule', authMiddleware, scheduleController.store);
serviceRouter.get('/schedules', authMiddleware, scheduleController.index);
serviceRouter.get('/schedule/:id_schedule', authMiddleware, scheduleController.show);
serviceRouter.put('/schedule/:id_schedule', authMiddleware, scheduleController.update);
serviceRouter.delete('/schedule/:id_schedule', authMiddleware, scheduleController.destroy);

serviceRouter.post('/diagnostic', authMiddleware, diagnosticController.store);
serviceRouter.get('/diagnostics', authMiddleware, diagnosticController.index);
serviceRouter.get('/diagnostic/:id_diagnostic', authMiddleware, diagnosticController.show);
serviceRouter.put('/diagnostic/:id_diagnostic', authMiddleware, diagnosticController.update);
serviceRouter.delete('/diagnostic/:id_diagnostic', authMiddleware, diagnosticController.destroy);

serviceRouter.post('/checklist/:id_diagnostic', authMiddleware, checklistController.store);
serviceRouter.get('/checklists', authMiddleware, checklistController.index);
serviceRouter.get('/checklist/:id_checklist', authMiddleware, checklistController.show);
serviceRouter.put('/checklist/:id_checklist', authMiddleware, checklistController.update);
serviceRouter.delete('/checklist/:id_checklist', authMiddleware, checklistController.destroy);

serviceRouter.post('/preventive', authMiddleware, preventiveController.store);
serviceRouter.get('/preventives', authMiddleware, preventiveController.index);
serviceRouter.get('/preventive/:id_preventive', authMiddleware, preventiveController.show);
serviceRouter.put('/preventive/:id_preventive', authMiddleware, preventiveController.update);
serviceRouter.delete('/preventive/:id_preventive', authMiddleware, preventiveController.destroy);

serviceRouter.post('/record', authMiddleware, recordController.store);
serviceRouter.get('/records', authMiddleware, recordController.index);
serviceRouter.get('/record/:id_record', authMiddleware, recordController.show);
serviceRouter.delete('/record/:id_record', authMiddleware, recordController.destroy);

serviceRouter.post('/timeline', authMiddleware, timelineController.store);
serviceRouter.get('/timelines', authMiddleware, timelineController.index);
serviceRouter.get('/timeline/:id_timeline', authMiddleware, timelineController.show);
serviceRouter.delete('/timeline/:id_timeline', authMiddleware, timelineController.destroy);

serviceRouter.post('/timeline/detail/:id_timeline', authMiddleware, timelineDetailController.store);
serviceRouter.get('/timeline-details', authMiddleware, timelineDetailController.index);
serviceRouter.put('/timeline/detail/:id_time_detail', authMiddleware, timelineDetailController.update);
serviceRouter.delete('/timeline/detail/:id_time_detail', authMiddleware, timelineDetailController.destroy);

module.exports = serviceRouter;
