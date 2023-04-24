import ProductModel from '../models/product.model';
import { IProduct } from '../interface/product.interface';
import connection from '../models/connection';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.productModel.createProduct(name, amount);
    return newProduct;
  }

  async findAllProducts(): Promise<IProduct[]> {
    const products = await this.productModel.findAllProducts();
    return products;
  }
}
