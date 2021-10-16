import { Router } from "express";
import {CreateProductsController} from "../../../../modules/products/controllers/CreateProductsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const productsRoutes = Router();
const createProductsController = new CreateProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductsController.handle);

export { productsRoutes };