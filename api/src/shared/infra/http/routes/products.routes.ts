import { Router } from "express";
import {CreateProductsController} from "../../../../modules/products/controllers/CreateProductsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListProductsController} from "../../../../modules/products/controllers/ListProductsController";
import {ListAvailableProductsController} from "../../../../modules/products/controllers/ListAvailableProductsController";

const productsRoutes = Router();
const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listAvailableProductsController = new ListAvailableProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductsController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdmin, listProductsController.handle);
productsRoutes.get("/available", listAvailableProductsController.handle);

//ToDo
//Update Available
//Update Stock
//Update Price
//Update Offer
//List Products By Category
//Get Product Available

export { productsRoutes };