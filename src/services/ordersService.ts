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

    // Função realizada com refeência e ajuda de Denis Johnatan e Amanda Fernandes
    const validatedOrders = allOrders.map((order) => ({
      ...order, // Para não sobrescrever as orders
      products: order.Products.map((product) => product.id), // adiciona a propriedade products que contem apenas os ids dos produtos
    }));

    console.log(validatedOrders);

    return { code: 200, validatedOrders };
  };
}

export default OrdersService;
