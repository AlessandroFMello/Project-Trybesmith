import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productController = new ProductsController();

router.get('/', productController.getAll);

export default router;