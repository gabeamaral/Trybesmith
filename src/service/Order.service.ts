import OrderModel from '../models/order.model';
import { IOrder } from '../interface/order.interface';
import connection from '../models/connection';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  async findAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.findAllOrders();
    return allOrders;
  }
}
