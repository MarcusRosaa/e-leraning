const { Router } = require('express');

const LessonController = require('./app/controllers/LessonController');
const ModuleController = require('./app/controllers/ModuleController');

const router = Router();

router.get('/lessons', LessonController.index);
router.get('/lessons/:id', LessonController.show);
router.delete('/lessons/:id', LessonController.delete);
router.post('/lessons', LessonController.store);
router.put('/lessons/:id', LessonController.update);

router.get('/modules', ModuleController.index);
router.get('/modules/:id', ModuleController.show);
router.post('/modules', ModuleController.store);
router.put('/modules/:id', ModuleController.update);
router.delete('/modules/:id', ModuleController.delete);

module.exports = router;
