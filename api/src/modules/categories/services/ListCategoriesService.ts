import 'reflect-metadata';
import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../entities/Category";
import {inject, injectable} from "tsyringe";

@injectable()
class ListCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}

export { ListCategoriesService };