import express from 'express';
const router = express.Router();
import {getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo} from  '../controllers/todo.controller.js';

router.route('/todos').get(getAllTodos);
router.route('/todo/new').post(createTodo);
router.route('/todo').get(getTodoById);
router.route('/todo/update').put(updateTodo);
router.route('/todo/delete').delete(deleteTodo);


export default router;







