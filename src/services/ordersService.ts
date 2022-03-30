import { prisma } from '../models/connection';

class OrdersService {
  public getAll = async () => {
    const allOrders = await prisma.orders.findMany({ 
      include: {
        Products: {
          select: { id: true },
        },
      },
    });

    // Função realizada com refeência de Amanda Fernandes
    const validatedOrders = allOrders.map((order) => ({
      id: order.id,
      userId: order.userId,
      products: order.Products.map((product) => product.id), // adiciona a propriedade products que contem apenas os ids dos produtos
    }));

    return { code: 200, validatedOrders };
  };
}

export default OrdersService;
