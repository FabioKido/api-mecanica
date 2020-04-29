const { Router } = require('express');

const serviceController = require('../controllers/serviceEnvironment/serviceController');
const scheduleController = require('../controllers/serviceEnvironment/scheduleController');
const checklistController = require('../controllers/serviceEnvironment/checklistController');
const diagnosticController = require('../controllers/serviceEnvironment/diagnosticController');
const preventiveController = require('../controllers/serviceEnvironment/preventiveController');
const recordController = require('../controllers/serviceEnvironment/recordController');
const timelineController = require('../controllers/serviceEnvironment/timelineController');

const serviceRouter = Router();

serviceRouter.post('/add', serviceController.addService);
serviceRouter.get('/all', serviceController.getServices);
serviceRouter.get('/one/:id_service', serviceController.getService);
serviceRouter.put('/one/:id_service', serviceController.updateService);
serviceRouter.delete('/one/:id_service', serviceController.deleteService);

serviceRouter.post('/schedule', scheduleController.addSchedule);
serviceRouter.get('/schedules', scheduleController.getSchedules);
serviceRouter.get('/schedule/:id_schedule', scheduleController.getSchedule);
serviceRouter.put('/schedule/:id_schedule', scheduleController.updateSchedule);
serviceRouter.delete('/schedule/:id_schedule', scheduleController.deleteSchedule);

serviceRouter.post('/checklist', checklistController.addChecklist);
serviceRouter.get('/checklists', checklistController.getChecklists);
serviceRouter.get('/checklist/:id_checklist', checklistController.getChecklist);
serviceRouter.put('/checklist/:id_checklist', checklistController.updateChecklist);
serviceRouter.delete('/checklist/:id_checklist', checklistController.deleteChecklist);

serviceRouter.post('/diagnostic/:id_checklist', diagnosticController.addDiagnostic);
serviceRouter.get('/diagnostics', diagnosticController.getDiagnostics);
serviceRouter.get('/diagnostic/:id_diagnostic', diagnosticController.getDiagnostic);
serviceRouter.put('/diagnostic/:id_diagnostic', diagnosticController.updateDiagnostic);
serviceRouter.delete('/diagnostic/:id_diagnostic', diagnosticController.deleteDiagnostic);

serviceRouter.post('/preventive', preventiveController.addPreventive);
serviceRouter.get('/preventives', preventiveController.getPreventives);
serviceRouter.get('/preventive/:id_preventive', preventiveController.getPreventive);
serviceRouter.put('/preventive/:id_preventive', preventiveController.updatePreventive);
serviceRouter.delete('/preventive/:id_preventive', preventiveController.deletePreventive);

serviceRouter.post('/record', recordController.addRecord);
serviceRouter.get('/records', recordController.getRecords);
serviceRouter.get('/record/:id_record', recordController.getRecord);
serviceRouter.delete('/record/:id_record', recordController.deleteRecord);

serviceRouter.post('/timeline', timelineController.addTimeline);
serviceRouter.get('/timelines', timelineController.getTimelines);
serviceRouter.get('/timeline/:id_timeline', timelineController.getTimeline);
serviceRouter.put('/timeline/:id_timeline', timelineController.updateTimeline);
serviceRouter.delete('/timeline/:id_timeline', timelineController.deleteTimeline);

module.exports = serviceRouter;
