import express from 'express';
const router = express.Router();

import * as TaskController from '../app/controllers/TasksController.js';
import * as UserController from '../app/controllers/UsersController.js';
import AuthMiddleware from '../app/middlewares/AuthMiddleware.js';


// user router

router.post('/Registration', UserController.Registration);
router.post('/Login', UserController.Login);
router.get('/ProfileDetails', AuthMiddleware, UserController.ProfileDetails);
router.post('/ProfileUpdate', AuthMiddleware, UserController.ProfileUpdate);
router.get('/EmailVerify/:email', UserController.EmailVerify);
router.post('/CodeVerify', UserController.CodeVerify);
router.post('/PasswordReset', UserController.PasswordReset);




// // task manage

router.post('/TaskCreate', AuthMiddleware,TaskController.TaskCreate);
router.get('/UpdateTaskStatus/:id/:status', AuthMiddleware,TaskController.UpdateTaskStatus);
router.get('/TaskListStatus/:status', AuthMiddleware,TaskController.TaskListStatus);
router.get('/DeleteTask/:id', AuthMiddleware,TaskController.DeleteTask);
router.get('/TaskCounting', AuthMiddleware,TaskController.TaskCounting);

export default router;

