import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/categories/controllers/CreateCategoryController";
import { ListCategoriesController} from "../../../../modules/categories/controllers/ListCategoriesController";
import {ActivateCategoriesController} from "../../../../modules/categories/controllers/ActivateCategoriesController";
import {ListActivateCategoriesController} from "../../../../modules/categories/controllers/ListActivateCategoriesController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const activateCategoriesController = new ActivateCategoriesController();
const listActivateCategoriesController = new ListActivateCategoriesController();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, createCategoryController.handle);

categoriesRoutes.get("/", ensureAuthenticated, listCategoriesController.handle);

categoriesRoutes.patch("/activate/:id", ensureAuthenticated, ensureAdmin, activateCategoriesController.handle);

categoriesRoutes.get("/activate", listActivateCategoriesController.handle);

export { categoriesRoutes };