import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../models/Category";

class ListCategoriesService {
    constructor(private categoryRepositories: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepositories.list();
        return categories;
    }
}

export { ListCategoriesService };