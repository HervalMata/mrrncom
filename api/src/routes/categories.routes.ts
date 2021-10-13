import { Router } from "express";

import { CreateCategoryController } from "../modules/categories/controllers/createCategory/CreateCategoryController";
import { ListCategoriesController} from "../modules/categories/controllers/listCategories/ListCategoriesController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };