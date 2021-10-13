import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../models/Category";

class ListCategoriesService {
    constructor(private categoryRepositories: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepositories.list();
    }
}

export { ListCategoriesService };