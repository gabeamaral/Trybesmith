import { Router } from 'express';
import OrderController from '../controller/order.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', (req, res) => orderController.findAllOrders(req, res));

export default orderRouter;