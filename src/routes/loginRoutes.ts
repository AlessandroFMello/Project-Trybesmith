import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginValidationMiddleware from '../middlewares/loginValidationMiddleware';

const router = Router();

const loginController = new LoginController();

router.post('/', loginValidationMiddleware, loginController.login);

export default router;