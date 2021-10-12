import {CategoriesRepository} from "../../repositories/CategoriesRepository";
import {ListCategoriesService} from "../../services/ListCategoriesService";
import {ListCategoriesController} from "./ListCategoriesController";

const categoriesRepository = new CategoriesRepository();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };