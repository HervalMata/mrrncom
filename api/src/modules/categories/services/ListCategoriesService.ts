import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../models/Category";

class ListCategoriesService {
    constructor(private categoryRepositories: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoryRepositories.list();
        return categories;
    }
}

export { ListCategoriesService };