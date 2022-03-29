import { Router } from 'express';
import UsersController from '../controllers/usersController';
import usersValidationMiddleware from '../middlewares/usersValudationMiddleware';

const router = Router();

const usersController = new UsersController();

router.get('/', usersController.getAll);

router.post('/', usersValidationMiddleware, usersController.createUser);

export default router;