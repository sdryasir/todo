import express from 'express';
const router = express.Router();
import {getAllUsers, getUserById, updateUser, deleteUser} from  '../controllers/user.controller.js';
import { loginUser, signUpUser } from '../controllers/authController.js';

router.route('/auth/login').post(loginUser);
router.route('/auth/signup').post(signUpUser);


router.route('/users').get(getAllUsers);
router.route('/user').get(getUserById);
router.route('/user/update').put(updateUser);
router.route('/user/delete').delete(deleteUser);


export default router;




