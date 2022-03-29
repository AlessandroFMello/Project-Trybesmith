import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private bookService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const { code, allProducts } = await this.bookService.getAll();
    return res.status(code).json(allProducts);
  };
}

export default ProductsController;
