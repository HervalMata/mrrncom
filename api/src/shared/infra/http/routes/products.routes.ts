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
import {ListProductsByCategoryController} from "../../../../modules/products/controllers/ListProductsByCategoryController";
import {GetAvailableProductController} from "../../../../modules/products/controllers/GetAvailableProductController";

const productsRoutes = Router();
const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const listAvailableProductsController = new ListAvailableProductsController();
const updateAvailabilityProductsController = new UpdateAvailabilityProductsController();
const updateStockProductsController = new UpdateStockProductsController();
const updatePriceProductsController = new UpdatePriceProductsController();
const updateOfferProductsController = new UpdateOfferProductsController();
const listProductsByCategoryController = new ListProductsByCategoryController();
const getAvailableProductController = new GetAvailableProductController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductsController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdmin, listProductsController.handle);
productsRoutes.get("/available", listAvailableProductsController.handle);
productsRoutes.patch("/available", ensureAuthenticated, ensureAdmin, updateAvailabilityProductsController.handle);
productsRoutes.patch("/stock", ensureAuthenticated, ensureAdmin, updateStockProductsController.handle);
productsRoutes.patch("/price", ensureAuthenticated, ensureAdmin, updatePriceProductsController.handle);
productsRoutes.patch("/offer", ensureAuthenticated, ensureAdmin, updateOfferProductsController.handle);
productsRoutes.get("/category/:category_id", listProductsByCategoryController.handle);
productsRoutes.get("/:id", getAvailableProductController.handle);

export { productsRoutes };