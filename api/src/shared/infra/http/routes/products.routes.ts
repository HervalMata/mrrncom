import { Router } from "express";
import multer from "multer";
import uploadConfig from '../../../../config/upload';
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
import {UploadProductImagesController} from "../../../../modules/products/controllers/UploadProductImagesController";

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
const uploadProductImagesController = new UploadProductImagesController();

const uploadProductImages = multer(uploadConfig.upload("./tmp/products/images"));

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductsController.handle);
productsRoutes.get("/", ensureAuthenticated, ensureAdmin, listProductsController.handle);
productsRoutes.get("/available", listAvailableProductsController.handle);
productsRoutes.patch("/available", ensureAuthenticated, ensureAdmin, updateAvailabilityProductsController.handle);
productsRoutes.patch("/stock", ensureAuthenticated, ensureAdmin, updateStockProductsController.handle);
productsRoutes.patch("/price", ensureAuthenticated, ensureAdmin, updatePriceProductsController.handle);
productsRoutes.patch("/offer", ensureAuthenticated, ensureAdmin, updateOfferProductsController.handle);
productsRoutes.get("/category/:category_id", listProductsByCategoryController.handle);
productsRoutes.get("/:id", getAvailableProductController.handle);
productsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, uploadProductImages.array("images"), uploadProductImagesController.handle);

export { productsRoutes };