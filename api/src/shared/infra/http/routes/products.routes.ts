import { Router } from "express";
import {CreateProductsController} from "../../../../modules/products/controllers/CreateProductsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListProductsController} from "../../../../modules/products/controllers/ListProductsController";
import {ListAvailableProductsController} from "../../../../modules/products/controllers/ListAvailableProductsController";
import {UpdateAvailabilityProductsController} from "../../../../modules/products/controllers/UpdateAvailabilityProductsController";
import {UpdateStockProductsController} from "../../../../modules/products/controllers/UpdateStockProductsController";
import {UpdatePriceProductsController} from "../../../../modules/products/controllers/UpdatePriceProductsController";
import {UpdateOfferProductsController} from "../../../../modules/products/controllers/UpdateOfferProductsController";

const productsRoutes = Router();
const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listAvailableProductsController = new ListAvailableProductsController();
const updateAvailabilityProductsController = new UpdateAvailabilityProductsController();
const updateStockProductsController = new UpdateStockProductsController();
const updatePriceProductsController = new UpdatePriceProductsController();
const updateOfferProductsController = new UpdateOfferProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductsController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdmin, listProductsController.handle);
productsRoutes.get("/available", listAvailableProductsController.handle);

//ToDo
//Update Available
productsRoutes.patch("/available", ensureAuthenticated, ensureAdmin, updateAvailabilityProductsController.handle);
//Update Stock
productsRoutes.patch("/stock", ensureAuthenticated, ensureAdmin, updateStockProductsController.handle);
//Update Price
productsRoutes.patch("/price", ensureAuthenticated, ensureAdmin, updatePriceProductsController.handle);
//Update Offer
productsRoutes.patch("/offer", ensureAuthenticated, ensureAdmin, updateOfferProductsController.handle);
//List Products By Category
//Get Product Available

export { productsRoutes };