import {CategoriesRepository} from "../../repositories/implementations/CategoriesRepository";
import {ListCategoriesService} from "../../services/ListCategoriesService";
import {ListCategoriesController} from "./ListCategoriesController";

// @ts-ignore
const categoriesRepository = CategoriesRepository().getInstance();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };