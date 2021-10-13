import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../models/Category";
import {inject, injectable} from "tsyringe";

@injectable()
class ListCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepositories: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepositories.list();
    }
}

export { ListCategoriesService };