import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private bookService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const { code, allProducts } = await this.bookService.getAll();
    return res.status(code).json(allProducts);
  };

  public createProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const { code, newProduct } = await this.bookService.createProduct({
      name,
      amount,
    });

    return res.status(code).json({ item: newProduct });
  };
}

export default ProductsController;
