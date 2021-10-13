import { Router } from "express";

import { CreateCategoryController } from "../modules/categories/controllers/createCategory/CreateCategoryController";
import listCategoriesController from "../modules/categories/controllers/listCategories";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController().handle(req, res);
});

export { categoriesRoutes };