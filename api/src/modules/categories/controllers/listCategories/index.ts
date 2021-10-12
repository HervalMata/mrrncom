import {CategoriesRepository} from "../../repositories/implementations/CategoriesRepository";
import {ListCategoriesService} from "../../services/ListCategoriesService";
import {ListCategoriesController} from "./ListCategoriesController";

export default (): ListCategoriesController => {
    const categoriesRepository = new CategoriesRepository();
    const listCategoriesService = new ListCategoriesService(categoriesRepository);
    const listCategoriesController = new ListCategoriesController(listCategoriesService);

    return listCategoriesController;
};