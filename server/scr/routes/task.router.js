const express = require('express');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.delete('/:id', taskController.deleteTaskById);
router.post('/', taskController.addTask);
router.put('/:id', taskController.editTask);

module.exports = router;