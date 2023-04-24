import { Request, Response } from 'express';
import ProductService from '../service/Product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const newProduct = await this.productService.createProduct(name, amount);
    return res.status(201).json(newProduct);
  }
}