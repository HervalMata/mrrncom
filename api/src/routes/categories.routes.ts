import { Router } from "express";

import { CreateCategoryController } from "../modules/categories/controllers/CreateCategoryController";
import { ListCategoriesController} from "../modules/categories/controllers/ListCategoriesController";
import {ActivateCategoriesController} from "../modules/categories/controllers/ActivateCategoriesController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const activateCategoriesController = new ActivateCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.put("/activate", activateCategoriesController.handle);

export { categoriesRoutes };