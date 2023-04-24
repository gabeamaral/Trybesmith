import UserModel from '../models/user.model';
import { IUser } from '../interface/user.interface';
import connection from '../models/connection';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) {}

  async createUser(info: IUser): Promise<IUser> {
    const newUser = await this.userModel.createUser(info);
    return newUser;
  }
}
