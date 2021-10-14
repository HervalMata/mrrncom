import { Router } from "express";

import { CreateCategoryController } from "../modules/categories/controllers/CreateCategoryController";
import { ListCategoriesController} from "../modules/categories/controllers/ListCategoriesController";
import {ActivateCategoriesController} from "../modules/categories/controllers/ActivateCategoriesController";
import {ListActivateCategoriesController} from "../modules/categories/controllers/ListActivateCategoriesController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const activateCategoriesController = new ActivateCategoriesController();
const listActivateCategoriesController = new ListActivateCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.put("/activate/:id", activateCategoriesController.handle);

categoriesRoutes.get("/activate", listActivateCategoriesController.handle);

export { categoriesRoutes };