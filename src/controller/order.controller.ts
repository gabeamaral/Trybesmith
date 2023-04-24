import { Request, Response } from 'express';
import OrderService from '../service/Order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async findAllOrders(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.findAllOrders();
    res.status(200).json(orders);
  }
}
