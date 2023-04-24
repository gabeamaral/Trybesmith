import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interface/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    return newProduct;
  }

  async findAllProducts(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return products as unknown as IProduct[];
  }
}
