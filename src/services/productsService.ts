import { prisma } from '../models/connection';

class ProductsService {
  public getAll = async () => {
    const allProducts = await prisma.products.findMany();

    return { code: 200, allProducts };
  };
}

export default ProductsService;
