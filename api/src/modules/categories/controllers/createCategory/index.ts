import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import {CreateCategoryService} from "../../services/CreateCategoryService";
import {CreateCategoryController} from "./CreateCategoryController";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    const createCategoryController = new CreateCategoryController(createCategoryService);
    return createCategoryController
};