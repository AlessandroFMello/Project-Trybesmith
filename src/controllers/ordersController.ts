import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const { code, validatedOrders } = await this.ordersService.getAll();

    return res.status(code).json(validatedOrders);
  };
}

export default OrdersController;
