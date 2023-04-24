import { Request, Response } from 'express';
import UserServices from '../service/User.service';
import generateToken from '../utils/tokenJwt';

export default class ProductsController {
  constructor(private userService = new UserServices()) {}

  async createUser(req: Request, res: Response): Promise<void> {
    const info = req.body;
    const newUser = await this.userService.createUser(info);
    if (newUser) {
      const token = generateToken(info.username, Number(newUser.id));
      res.status(201).json({ token });
    }
  }
}
