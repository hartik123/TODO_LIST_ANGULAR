const express = require('express');
const getTodosController = require('../controllers/getTodosController');
const createTodoController = require('../controllers/createTodoController');
const deleteTodoController = require('../controllers/deleteTodoController');

const router = express.Router();

router.post('/getAll', getTodosController);
router.post('/', createTodoController);
router.delete('/', deleteTodoController);


module.exports = router;