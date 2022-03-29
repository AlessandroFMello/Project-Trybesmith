import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const { code, allProducts } = await this.productsService.getAll();
    return res.status(code).json(allProducts);
  };

  public createProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const { code, newProduct } = await this.productsService.createProduct({
      name,
      amount,
    });

    return res.status(code).json({ item: newProduct });
  };
}

export default ProductsController;
