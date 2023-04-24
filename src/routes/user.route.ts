import { Router } from 'express';
import UserController from '../controller/user.controller';

const userRouter = Router();

const userController = new UserController();
userRouter.post('/', (req, res) => userController.createUser(req, res));

export default userRouter;