import NewProductShape from '../interfaces/newProduct';
import { prisma } from '../models/connection';

class ProductsService {
  public getAll = async () => {
    const allProducts = await prisma.product.findMany();

    return { code: 200, allProducts };
  };

  public createProduct = async (product: NewProductShape) => {
    const newProduct = await prisma.product.create({
      data: product,
    });

    return { code: 201, newProduct };
  };
}

export default ProductsService;
