import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import {CreateCategoryService} from "../../services/CreateCategoryService";
import {CreateCategoryController} from "./CreateCategoryController";

// @ts-ignore
const categoriesRepository = CategoriesRepository().getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController };