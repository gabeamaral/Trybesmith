import { Router } from 'express';
import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', (req, res) => productController.createProduct(req, res));
productRouter.get('/', (req, res) => productController.findAllProducts(req, res));

export default productRouter;