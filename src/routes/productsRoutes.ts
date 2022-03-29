import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import productsValidationMiddleware from '../middlewares/joiValidationMiddleware';

const router = Router();

const productController = new ProductsController();

router.get('/', productController.getAll);

router.post('/', productsValidationMiddleware, productController.createProduct);

export default router;