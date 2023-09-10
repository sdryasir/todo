import express from 'express';
const router = express.Router();
import {getAllUsers, getUserById, createUser, updateUser, deleteUser} from  '../controllers/user.controller.js';

router.route('/users').get(getAllUsers);
router.route('/user/new').get(createUser);
router.route('/user').get(getUserById);
router.route('/user/update').get(updateUser);
router.route('/user/delete').get(deleteUser);


export default router;




